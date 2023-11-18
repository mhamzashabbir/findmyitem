import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TextInput } from 'react-native';
import CustomButton from '../../../components/CustomButton';
import BackButton from '../../../components/Back';
import postsData from '../../../data/items';

const EditMyPost = ({ route, navigation }) => {
  const {name, title, description, date, imageUrl, address, category } = route.params;

  const [editedTitle, setEditedTitle] = useState(title);
  const [editedDescription, setEditedDescription] = useState(description);
  const [editedAddress, setEditedAddress] = useState(address);

  const [dynamicPostsData, setDynamicPostsData] = useState(postsData);

  const handleSaveChanges = () => {
    navigation.goBack();
  };

  useEffect(() => {
    setDynamicPostsData(postsData);
  }, [postsData]);


  return (
    <ScrollView style={styles.container}>
      <BackButton onPress={() => navigation.goBack()} />
      <View style={styles.userInfoContainer}>
        <Text style={styles.userName}>{name}</Text>
        <Text style={styles.date}>{date}</Text>
      </View>
      <View style={styles.separator} />
      <View style={styles.itemDetailsContainer}>
        <Text style={styles.title}>Edit Post</Text>
        <Image source={{ uri: imageUrl }} style={styles.image} />
        <TextInput
          style={styles.editInput}
          placeholder="Edit Title"
          value={editedTitle}
          onChangeText={(text) => setEditedTitle(text)}
        />
        <TextInput
          style={styles.editInput}
          placeholder="Edit Description"
          value={editedDescription}
          onChangeText={(text) => setEditedDescription(text)}
          multiline
          numberOfLines={4}
        />
        <TextInput
          style={styles.editInput}
          placeholder="Edit Address"
          value={editedAddress}
          onChangeText={(text) => setEditedAddress(text)}
        />
        <View style={styles.additionalDetailsContainer}>
          <Text style={styles.category}>{category}</Text>
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <CustomButton text={'Save Changes'} handleButton={handleSaveChanges} width={'90%'} height={40} border={10} />
      </View>

    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  userInfoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    marginTop: 30,
  },
  userName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#0B666A',
  },
  date: {
    fontSize: 14,
    color: 'gray',
  },
  separator: {
    height: 1,
    backgroundColor: '#0B666A',
    marginVertical: 16,
  },
  itemDetailsContainer: {
    paddingHorizontal: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  image: {
    width: '100%',
    height: 200,
    resizeMode: 'contain',
    marginBottom: 10,
  },
  editInput: {
    borderColor: '#0B666A',
    borderWidth: 1,
    borderRadius: 8,
    padding: 8,
    marginBottom: 10,
  },
  additionalDetailsContainer: {
    marginTop: 20,
  },
  category: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#0B666A',
  },
  buttonContainer: {
    marginBottom: 20,
  }
});

export default EditMyPost;
