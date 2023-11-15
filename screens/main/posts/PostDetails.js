// PostDetails.js
import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import CustomButton from '../../../components/CustomButton';

const PostDetails = ({ route, navigation }) => {
  const { title, description, date, imageUrl } = route.params;

  const handleEdit = () => {
    console.log('Edit post logic');
  };

  const handleDelete = () => {
    console.log('Delete post logic');
  };

  return (
    <View style={styles.container}>
      <Image source={{ uri: imageUrl }} style={styles.image} />
      <View style={styles.contentContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.date}>{date}</Text>
        <Text style={styles.description}>{description}</Text>
      </View>
      <View style={styles.buttonContainer}>
        <CustomButton text="Edit" handleButton={handleEdit} width={'40%'} height={40} border={10} />
        <CustomButton text="Delete" handleButton={handleDelete} width={'40%'} height={40} border={10} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  image: {
    width: '100%',
    height: 200,
    resizeMode: 'contain',
    marginTop: 150,
  },
  contentContainer: {
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  date: {
    fontSize: 16,
    color: 'gray',
    marginBottom: 10,
  },
  description: {
    fontSize: 18,
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginVertical: 20,
  },
});

export default PostDetails;
