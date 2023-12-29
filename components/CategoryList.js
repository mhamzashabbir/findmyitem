import React from 'react';
import { View, Text, FlatList, Pressable, StyleSheet, Image } from 'react-native';
import data from '../data/items';
import CustomButton from './CustomButton';
import colors from '../styles/colors';

const CategoryList = ({ onPressItem, category, handleViewListing }) => {
  const renderItem = ({ item }) => (
    <Pressable style={styles.listItem} onPress={() => onPressItem(item)}>
      <Image source={{ uri: item.imageUrl }} style={styles.itemImage} />
      <Text style={styles.itemTitle}>{item.title}</Text>
    </Pressable>
  );

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.categoryTitle}>{category} Items</Text>
        <CustomButton
          text="View All"
          handleButton={handleViewListing}
          width={'25%'}
          height={25}
          border={10}
          fontSize={12}
        />
      </View>
      <FlatList
        data={data.filter((item) => item.category.toLowerCase() === category.toLowerCase())}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    width: '90%',
    marginTop: 20,
  },
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  categoryTitle: {
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 10,
    textAlign: 'center',
    color: colors.green,
  },
  listItem: {
    padding: 10,
    borderRadius: 10,
    overflow: 'hidden',
    marginRight: 10,
    backgroundColor: colors.white,
    elevation: 2,
  },
  itemImage: {
    width: 80,
    height: 80,
    borderRadius: 8,
    marginBottom: 5,
    alignSelf: 'center',
  },
  itemTitle: {
    fontSize: 14,
    fontWeight: '600',
    textAlign: 'center',
    color: colors.black,
  },
  listContainer: {
    paddingBottom: 10,
  },
});

export default CategoryList;
