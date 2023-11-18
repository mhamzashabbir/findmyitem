import React from 'react';
import { View, Text, FlatList, Image, StyleSheet, Pressable } from 'react-native';

const RecentListings = ({ data, onPressListing }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Recent Listings</Text>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <Pressable style={styles.listingContainer} onPress={() => onPressListing(item)}>
            <Image source={{ uri: item.imageUrl }} style={styles.listingImage} />
            <Text style={styles.listingName}>{item.name}</Text>
            <Text style={styles.listingTitle}>{item.title}</Text>
            <Text style={styles.listingDate}>{item.category + '-' + item.date }</Text>
          </Pressable>
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
    width: '90%',
    marginLeft: 20,
    marginRight: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: '700',
    marginBottom: 10,
  },
  listingContainer: {
    marginRight: 15,
  },
  listingImage: {
    width: 120,
    height: 120,
    borderRadius: 15,
    marginLeft: 10,
  },
  listingName: {
    marginTop: 5,
    fontSize: 16,
    fontWeight: '500',
    textAlign: 'center',
    color : '#0B666A'
  },
  listingTitle: {
    marginTop: 5,
    fontSize: 16,
    fontWeight: '500',
    textAlign: 'center',
    color : 'black'
  },
  listingDate: {
    marginTop: 5,
    fontSize: 14,
    fontWeight: '500',
    color: 'gray',
    textAlign: 'center',
  }
});

export default RecentListings;
