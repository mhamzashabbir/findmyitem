import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Pressable, StyleSheet, ScrollView, Image } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import colors from '../../../styles/colors';
import CustomButton from '../../../components/CustomButton';

const CreatePostScreen = ({ navigation }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState('');
  const [address, setAddress] = useState('');
  const [category, setCategory] = useState('Lost');
  const [selectedImage, setSelectedImage] = useState('');

  useEffect(() => {
    (async () => {
      const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (status !== 'granted') {
        alert('Sorry, we need camera roll permissions to make this work!');
      }
    })();
  }, []);

  const handleCategoryChange = (value) => {
    setCategory(value);
  };

  const handleSelectImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      const selectedImage = result.assets && result.assets.length > 0 ? result.assets[0].uri : null;
      setImage(selectedImage);
    }
  };

  const handleCreatePost = () => {
    console.log('Post created:', { title, description, image: selectedImage, address, category });
    navigation.goBack();
  };

  return (
    <ScrollView style={styles.container} keyboardDismissMode='on-drag'>
      <Text style={styles.heading}>Create a New Post</Text>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Title</Text>
        <TextInput
          style={styles.input}
          value={title}
          onChangeText={(text) => setTitle(text)}
          placeholder="Enter title"
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Description</Text>
        <TextInput
          style={styles.input}
          value={description}
          onChangeText={(text) => setDescription(text)}
          placeholder="Enter description"
          multiline
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Image</Text>
        <Pressable onPress={handleSelectImage}>
          <Text style={{ color: colors.green }}>Select Image</Text>
        </Pressable>
        {image ? (
          <Image source={{ uri: image }} style={{ width: 320, height: 200, marginTop: 10 }} />
        ) : null}
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Address</Text>
        <TextInput
          style={styles.input}
          value={address}
          onChangeText={(text) => setAddress(text)}
          placeholder="Enter address"
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Category</Text>
        <View style={styles.radioContainer}>
          <Pressable
            style={[styles.radioButton, category === 'Lost' && styles.activeRadioButton]}
            onPress={() => handleCategoryChange('Lost')}
          >
            <Text style={styles.radioText}>Lost</Text>
          </Pressable>
          <Pressable
            style={[styles.radioButton, category === 'Found' && styles.activeRadioButton]}
            onPress={() => handleCategoryChange('Found')}
          >
            <Text style={styles.radioText}>Found</Text>
          </Pressable>
        </View>
      </View>

      <CustomButton text="Create Post" handleButton={handleCreatePost} width={'90%'} height={40} border={10} margin={20} marginBottom={50} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: colors.green,
    marginTop: 40,
    textAlign: 'center',
  },
  inputContainer: {
    marginBottom: 20,
  },
  label: {
    fontSize: 18,
    marginBottom: 8,
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: colors.gray, // Initial border color
    fontSize: 16,
    paddingVertical: 8,
  },
  radioContainer: {
    flexDirection: 'row',
  },
  radioButton: {
    marginRight: 20,
    padding: 8,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: colors.gray, // Initial border color
  },
  activeRadioButton: {
    borderColor: colors.green,
    borderWidth: 2,
  },
  radioText: {
    fontSize: 16,
  },
});

export default CreatePostScreen;
