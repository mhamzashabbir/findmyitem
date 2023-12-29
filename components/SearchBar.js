import React from 'react';
import { View, TextInput, StyleSheet, Pressable } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import colors from '../styles/colors';

const SearchBar = (props) => {

  const styles = StyleSheet.create({
    searchContainer: {
      height: 50,
      width: props.width || '90%',
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: colors.searchBackground,
      borderRadius: 10,
      paddingHorizontal: 15,
      margin: props.margin || 20,
      marginLeft: props.marginleft || 0,
      borderColor: colors.searchBorder,
      borderWidth: 2,
    },
    searchIcon: {
      marginRight: 10,
    },
    input: {
      flex: 1,
      fontSize: 18,
      color: colors.searchPlaceholder,
    },
  });


  return (
    <View style={styles.searchContainer}>
      <TextInput
        placeholder="Search your item here..."
        style={styles.input}
        placeholderTextColor={colors.black}
      />
      <Pressable onPress={handleSearch}>
        <FontAwesome name="search" size={24} color={colors.black} style={styles.searchIcon} />
      </Pressable>
    </View>
  );


};


export default SearchBar;
