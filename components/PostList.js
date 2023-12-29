import React, {useState} from 'react';
import { View, Text, Image, Pressable, TextInput, FlatList, StyleSheet } from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import Toast from 'react-native-toast-message';
import colors from '../styles/colors';
import CustomButton from './CustomButton';

const PostList = ({ data , handleContact, category }) => {
  const [commentText, setCommentText] = useState('');
  const [comments, setComments] = useState([
    { id: '1', user: 'John Doe', text: 'This is mine, lost it few days back' },
    { id: '2', user: 'Jane Smith', text: 'Great work' },
  ]);
  const [posts, setPosts] = useState(data.filter((post) => post.category === category));

  const handleSavePost = () => {
    Toast.show({
      type: 'success',
      position: 'top',
      text1: 'Post Saved',
      text2: 'Your post has been saved successfully',
    });
  }


  const handleCommentSubmit = ({ item }) => {
    if (!item) {
      console.error('Item is undefined');
      return;
    }

    if (commentText.trim() !== '') {
      const newComment = {
        id: String(comments.length + 1),
        user: item.name,
        text: commentText,
      };
      item.comments = [...item.comments, newComment];
      setComments([...comments]);
      setCommentText('');
    }
  };



  const renderItem = ({ item }) => (
    <View style={styles.postContainer}>
      <View style={styles.userInfoContainer}>
        <Text style={styles.userName}>{item.name}</Text>
        <Text style={styles.date}>{item.date}</Text>
      </View>
      <View style={styles.separator} />

      <View style={styles.itemDetailsContainer}>
        <View style={styles.savePostContainer}>
          <Text style={styles.title}>{item.title}</Text>
          <View style={styles.savePost}>
            <FontAwesome name="bookmark" size={24} color={colors.green} onPress={handleSavePost}/>
          </View>
        </View>
        <Image source={{ uri: item.imageUrl }} style={styles.image} />
        <Text style={styles.description}>{item.description}</Text>

        <View style={styles.additionalDetailsContainer}>
          <Text style={styles.category}>{item.category}</Text>
          <Text style={styles.address}>Address: {item.address}</Text>
        </View>
      </View>
      <View style={styles.separator} />

      <CustomButton text={"Contact " + (item.category == 'Found' ? 'Finder' : 'Owner') } handleButton={() => handleContact(item)} width={'90%'} height={40} border={10} />

      <View style={styles.commentInputContainer}>
        <TextInput
          style={styles.commentInput}
          placeholder="Add a comment..."
          value={commentText}
          onChangeText={(text) => setCommentText(text)}
        />
        <Pressable
          style={styles.commentSubmitButton}
          onPress={() => handleCommentSubmit({ item })}
        >
          <FontAwesome name="paper-plane" size={24} color={colors.white} />
        </Pressable>
      </View>

      <View style={styles.commentsContainer}>
        <Text style={styles.commentsHeader}>Comments</Text>
        {item.comments &&
          item.comments.map((comment) => (
            <View key={comment.id} style={styles.commentItem}>
              <Text style={styles.commentUser}>{comment.user}</Text>
              <Text style={styles.commentText}>{comment.text}</Text>
            </View>
          ))}
      </View>
    </View>
  );

  return (
    <FlatList
      data={posts}
      keyExtractor={(item) => item.id.toString()}
      renderItem={renderItem}
    />
  );
};


const styles = StyleSheet.create({
  postContainer: {
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 15,
    borderRadius: 10,
    backgroundColor: 'white',
  },
  userInfoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    marginTop: 30,
  },
  savePostContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  userName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.green,
  },
  date: {
    fontSize: 14,
    color: colors.gray,
  },
  separator: {
    height: 1,
    backgroundColor: colors.green,
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
    color: colors.green,
  },
  address: {
    fontSize: 16,
    color: colors.gray,
    marginBottom: 10,
  },
  savePost: {
    justifyContent: 'center',
    alignItems: 'center',
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
    color: colors.green,
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
    borderColor: colors.green,
    borderWidth: 1,
    borderRadius: 8,
    padding: 8,
    marginRight: 10,
  },
  commentSubmitButton: {
    backgroundColor: colors.green,
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 8,
  },
  commentSubmitButtonText: {
    color: colors.white,
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default PostList;
