import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, Pressable } from 'react-native';
import PostItem from '../../../components/Post';
import SearchBar from '../../../components/SearchBar';
import postsData from '../../../data/items';

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

  const handleSearch = (text) => {

  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Your Posts</Text>

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
    backgroundColor: 'white',
    padding: 16,
    width: '100%',
  },
  search: {
    width: '100%',
    backgroundColor: '#0B666A',
    marginBottom: 16
  },
  title: {

    fontSize: 24,
    fontWeight: '700',
    marginBottom: 16,
    marginTop: 50,
  },
});

export default PostsScreen;
