import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, Pressable, ScrollView, TextInput } from 'react-native';
import CustomButton from '../../../components/CustomButton';
import BackButton from '../../../components/Back';
import { FontAwesome } from '@expo/vector-icons';
import { Alert } from 'react-native';

const UserPostDetails = ({ route, navigation }) => {
  const { name, title, description, date, imageUrl, address, category } = route.params;

  const [commentText, setCommentText] = useState('');
  const [comments, setComments] = useState([
    { id: '1', user: 'John Doe', text: 'This is mine, lost it few days back' },
    { id: '2', user: 'Jane Smith', text: 'Great work' },
  ]);

  const handleSavePost = () => {
    Alert.alert(
      'Post Saved',
      'Your post has been saved successfully.',
    );
  };

  const handleContact = () => {
    navigation.navigate('UserContact');
  }

  const handleCommentSubmit = () => {
    if (commentText.trim() !== '') {
      const newComment = {
        id: String(comments.length + 1),
        user: name ,
        text: commentText,
      };
      setComments([...comments, newComment]);
      setCommentText('');
    }
  };

  return (
    <ScrollView style={styles.container}>

      <BackButton onPress={() => navigation.goBack()} />
      <View style={styles.userInfoContainer}>
        <Text style={styles.userName}>{name}</Text>
        <Text style={styles.date}>{date}</Text>
      </View>

      <View style={styles.separator} />

      <View style={styles.itemDetailsContainer}>
        <View style={styles.savePostContainer}>
        <Text style={styles.title}>{title}</Text>
        <Pressable style={styles.commentSubmitButton} onPress={handleSavePost}>
          <FontAwesome name="bookmark" size={24} color="white" />
        </Pressable>
        </View>
        <Image source={{ uri: imageUrl }} style={styles.image} />
        <Text style={styles.description}>{description}</Text>

        <View style={styles.additionalDetailsContainer}>
          <Text style={styles.category}>{category}</Text>
          <Text style={styles.address}>Address: {address}</Text>
        </View>
      </View>

      <CustomButton text={"Contact " + (category == 'Found' ? 'Finder' : 'Owner') } handleButton={handleContact} width={'90%'} height={40} border={10} />

      <View style={styles.commentInputContainer}>
        <TextInput
          style={styles.commentInput}
          placeholder="Add a comment..."
          value={commentText}
          onChangeText={text => setCommentText(text)}
        />
        <Pressable style={styles.commentSubmitButton} onPress={handleCommentSubmit}>
          <FontAwesome name="paper-plane" size={24} color="white" />
        </Pressable>
      </View>

      <View style={styles.commentsContainer}>
        <Text style={styles.commentsHeader}>Comments</Text>
        {comments.map(comment => (
          <View key={comment.id} style={styles.commentItem}>
            <Text style={styles.commentUser}>{comment.user}</Text>
            <Text style={styles.commentText}>{comment.text}</Text>
          </View>
        ))}
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
  savePostContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between'
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
  description: {
    fontSize: 15,
    marginBottom: 20,
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
  address: {
    fontSize: 16,
    color: 'gray',
    marginBottom: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginVertical: 20,
  },
  saveButtonContainer: {
    backgroundColor: '#0B666A',
    paddingVertical: 12,
    alignItems: 'center',
    marginVertical: 10,
    borderRadius: 8,
  },
  saveButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },

  commentsContainer: {
    margin:   16,
  },
  commentsHeader: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  commentItem: {
    marginBottom: 10,
  },
  commentUser: {
    fontWeight: 'bold',
    color: '#0B666A',
  },
  commentText: {
    color: 'black',
  },
  commentInputContainer: {
    flexDirection: 'row',
    marginTop: 10,
    marginHorizontal: 10,
    width: '90%',
  },
  commentInput: {
    flex: 1,
    borderColor: '#0B666A',
    borderWidth: 1,
    borderRadius: 8,
    padding: 8,
    marginRight: 10,
  },
  commentSubmitButton: {
    backgroundColor: '#0B666A',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 8,
  },
  commentSubmitButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default UserPostDetails;
