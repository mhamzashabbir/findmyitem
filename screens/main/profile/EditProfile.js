import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, StyleSheet, Image, ScrollView, Pressable } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import CustomButton from '../../../components/CustomButton';
import BackButton from '../../../components/Back';
import * as ImagePicker from 'expo-image-picker';
import Toast from 'react-native-toast-message';
import colors from '../../../styles/colors';

const EditProfile = ({ navigation, route }) => {

  const { currentName, currentEmail, currentPhone, currentAddress } = route.params || {};

  const [name, setName] = useState(currentName);
  const [email, setEmail] = useState(currentEmail);
  const [phone, setPhone] = useState(currentPhone);
  const [address, setAddress] = useState(currentAddress);
  const [profileImage, setProfileImage] = useState(require('../../../assets/user.png'));

  useEffect(() => {
    (async () => {
      const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (status !== 'granted') {
        alert('Sorry, we need camera roll permissions to make this work!');
      }
    })();
  }, []);

  const handleSaveChanges = () => {
    navigation.navigate('ProfileStack', {
      updatedName: name,
      updatedEmail: email,
      updatedPhone: phone,
      updatedAddress: address,
      updatedProfileImage: profileImage,
    });
    Toast.show({
      type: 'success',
      position: 'top',
      text1: 'Profile Updated',
      text2: 'Your profile has been updated successfully.',
    });
  };

  const handleSelectProfileImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      const selectedImage = result.assets && result.assets.length > 0 ? result.assets[0] : null;
        setProfileImage(selectedImage);
    }
  };


  return (
    <ScrollView style={styles.container}>
      <BackButton onPress={() => navigation.goBack()}/>
      <View style={styles.profileContainer}>
        <Pressable onPress={handleSelectProfileImage}>
          <Image source={profileImage} style={styles.profileImageStyle} />
        </Pressable>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Name</Text>
          <View style={styles.inputWithIcon}>
              <FontAwesome name="user" size={24} color={colors.iconColor} style={styles.icon} />
              <TextInput
                style={styles.input}
                value={name}
                onChangeText={(text) => setName(text)}
              />
          </View>
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Email</Text>
          <View style={styles.inputWithIcon}>
              <FontAwesome name="envelope" size={24} color={colors.iconColor} style={styles.icon} />
              <TextInput
                style={styles.input}
                value={email}
                onChangeText={text => setEmail(text)}
              />
          </View>
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Phone</Text>
          <View style={styles.inputWithIcon}>
              <FontAwesome name="phone" size={24} color={colors.iconColor} style={styles.icon} />
              <TextInput
                style={styles.input}
                value={phone}
                keyboardType='phone-pad'
                onChangeText={(text) => setPhone(text)}
              />
          </View>
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Address</Text>
          <View style={styles.inputWithIcon}>
              <FontAwesome name="location-arrow" size={30} color={colors.iconColor} style={styles.icon} />
              <TextInput
                style={styles.input}
                value={address}
                onChangeText={(text) => setAddress(text)}
              />
          </View>
        </View>

        <CustomButton text="Save Changes" handleButton={handleSaveChanges} width={'80%'} height={40} border={10} margin={40} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.mainBackground,
  },
  profileContainer: {
    alignItems: 'center',
    marginVertical: 20,
    marginTop: 50,
  },
  profileImageStyle: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 10,
  },
  inputContainer: {
    width: '80%',
    marginBottom: 20,
  },
  label: {
    fontSize: 18,
    fontWeight: '700',
    color: colors.black,
    marginVertical: 5,
  },
  input: {
    width: '100%',
    height: 40,
    backgroundColor: colors.inputBackground,
    borderRadius: 10,
    paddingHorizontal: 16,
  },
  inputWithIcon: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '90%',
    height: '40',
    backgroundColor: colors.inputBackground,
    borderRadius: 10,
  },
  icon: {
    marginLeft: 10,
  },
});

export default EditProfile;
