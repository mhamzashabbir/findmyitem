import React from 'react';
import { View, Text, StyleSheet, FlatList, Pressable } from 'react-native';
import PostItem from '../../../components/Post';
import SearchBar from '../../../components/SearchBar';
import postsData from '../../../data/items';
import colors from '../../../styles/colors';

const PostsScreen = ({ navigation }) => {

  const handlePostPress = (item) => {
    navigation.navigate('MyPostDetails', {
      name: item.name,
      title: item.title,
      description: item.description,
      date: item.date,
      imageUrl: item.imageUrl,
      category: item.category,
      address : item.address
    });
  };

  handleSearch = () => {
    Toast.show({
      type: 'info',
      position: 'top',
      text1: 'Search Feature is not available yet',
    })
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>My Posts</Text>

      <SearchBar width={'100%'} handleSearch={handleSearch}/>

      <FlatList
        data={postsData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
        <Pressable onPress={() => handlePostPress(item)} >
          <PostItem post={item} />
        </Pressable>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.mainBackground,
    padding: 16,
    width: '100%',
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    marginBottom: 16,
    marginTop: 50,
    color : colors.green,
  },
});

export default PostsScreen;
