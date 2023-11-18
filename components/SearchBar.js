import React from 'react';
import { View, TextInput, StyleSheet, Pressable } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const SearchBar = (props) => {

  const styles = StyleSheet.create({
    searchContainer: {
      height: 50,
      width: props.width || '90%',
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: '#97FEED',
      borderRadius: 10,
      paddingHorizontal: 15,
      margin: props.margin || 20,
      marginLeft: props.marginleft || 0,
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


export default SearchBar;
