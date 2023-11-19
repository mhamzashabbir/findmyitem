import React, { useState } from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import PostList from '../../../components/PostList';
import postsData from '../../../data/items';
import SearchBar from '../../../components/SearchBar';

const AllPostsScreen = ({navigation , route}) => {
  const { category } = route.params;

  const [activeTab, setActiveTab] = useState(category);

  const lostPosts = postsData.filter((post) => post.category === 'Lost');
  const foundPosts = postsData.filter((post) => post.category === 'Found');

  const handleTabPress = (tab) => {
    setActiveTab(tab);
  };

  const handleContact = () => {
    navigation.navigate('UserContact');
  };

  return (
    <View style={styles.container}>
      <View style={styles.tabContainer}>
        <Pressable
          style={[styles.tab, activeTab === 'Lost' && styles.activeTab]}
          onPress={() => handleTabPress('Lost')}
        >
          <Text style={styles.tabText}>Lost Items</Text>
        </Pressable>
        <Pressable
          style={[styles.tab, activeTab === 'Found' && styles.activeTab]}
          onPress={() => handleTabPress('Found')}
        >
          <Text style={styles.tabText}>Found Items</Text>
        </Pressable>
      </View>
      <SearchBar width={'100%'}/>
      {activeTab === 'Lost' && <PostList data={lostPosts} handleContact={handleContact} category="Lost"/>}
      {activeTab === 'Found' && <PostList data={foundPosts} handleContact={handleContact} category="Found" />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  tabContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
    marginTop: 30,
  },
  tab: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 2,
    borderBottomColor: 'transparent',
  },
  activeTab: {
    borderBottomColor: 'blue', // Choose your active tab color
  },
  tabText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  relatedPostsContainer: {
    alignItems: 'center',
    marginBottom: 16,
  },
  relatedPostsText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default AllPostsScreen;
