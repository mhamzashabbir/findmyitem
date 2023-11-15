// EditProfileScreen.js
import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, SafeAreaView, Image, ScrollView } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import CustomButton from '../../../components/CustomButton';
import BackButton from '../../../components/Back';

const EditProfile = ({ navigation, route }) => {

  const { currentName, currentEmail, currentPhone, currentAddress } = route.params || {};

  const [name, setName] = useState(currentName);
  const [email, setEmail] = useState(currentEmail);
  const [phone, setPhone] = useState(currentPhone);
  const [address, setAddress] = useState(currentAddress);

  const handleSaveChanges = () => {
    navigation.navigate('Profile', {
      updatedName: name,
      updatedEmail: email,
      updatedPhone: phone,
      updatedAddress: address,
    });
  };

  return (
    <ScrollView style={styles.container}>
          <BackButton onPress={() => navigation.goBack()}/>
      <View style={styles.profileContainer}>
        <Image
          source={require('../../../assets/user.png')}
          style={styles.profileImage}
        />

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Name</Text>
          <TextInput
            style={styles.input}
            value={name}
            onChangeText={(text) => setName(text)}
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Email</Text>
          <TextInput
            style={styles.input}
            value={email}
            onChangeText={(text) => setEmail(text)}
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Phone</Text>
          <TextInput
            style={styles.input}
            value={phone}
            keyboardType='phone-pad'
            onChangeText={(text) => setPhone(text)}
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Address</Text>
          <TextInput
            style={styles.input}
            value={address}
            onChangeText={(text) => setAddress(text)}
          />
        </View>

        <CustomButton text="Save Changes" handleButton={handleSaveChanges} width={'80%'} height={40} border={10} margin={40} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  profileContainer: {
    alignItems: 'center',
    marginVertical: 20,
    marginTop: 50,
  },
  profileImage: {
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
    color: 'black',
    marginVertical: 5,
  },
  input: {
    width: '100%',
    height: 40,
    backgroundColor: '#97FEED',
    borderRadius: 10,
    paddingHorizontal: 16,
  },
});

export default EditProfile;
