import React from 'react';
import { View, TextInput, StyleSheet, Pressable } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const SearchBar = () => {
  return (
    <View style={styles.searchContainer}>
      <TextInput
        placeholder="Search your item here..."
        style={styles.input}
        placeholderTextColor="#000"
      />
      <Pressable onPress={handleSearch}>
        <FontAwesome name="search" size={24} color="#000" style={styles.searchIcon} />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  searchContainer: {
    height: 50,
    width: '90%',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#97FEED',
    borderRadius: 30,
    paddingHorizontal: 15,
    margin: 20,
  },
  searchIcon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    fontSize: 18,
    color: '#000',
  },
});

export default SearchBar;
