import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, Pressable } from 'react-native';
import PostItem from '../../../components/Post';

const PostsScreen = ({ navigation }) => {

  const handlePostPress = (item) => {
    navigation.navigate('PostDetails', {
      title: item.title,
      description: item.description,
      date: item.date,
      imageUrl: item.imageUrl,
    });
  };


  const postsData = [
    {
      id: '1',
      title: 'Apple Watch',
      description: 'An Apple smartwatch, black color',
      date: '2023-01-15',
      imageUrl: 'https://apple-store.pk/wp-content/uploads/2022/12/alu-spacegray-sp.jpg'
    },
    {
      id: '2',
      title: 'Samsung Galaxy S21',
      description: 'A high-end Android smartphone with a powerful camera',
      date: '2023-02-20',
      imageUrl: 'https://i0.wp.com/mobileguru.pk/wp-content/uploads/2022/07/Samsung-Galaxy-S21-Plus-Pakistan-mobileguru.png?fit=867%2C867&ssl=1',
    },
    {
      id: '3',
      title: 'Sony PlayStation 5',
      description: 'The latest gaming console from Sony with advanced graphics',
      date: '2023-03-10',
      imageUrl: 'https://gmedia.playstation.com/is/image/SIEPDC/ps5-product-thumbnail-01-en-14sep21?$facebook$',
    },
    {
      id: '4',
      title: 'Canon EOS R5',
      description: 'A professional-grade mirrorless camera with 8K video capabilities',
      date: '2023-04-05',
      imageUrl: 'https://khawajaphotos.pk/wp-content/uploads/2022/03/Canon-EOS-R5-Only-body.jpg',
    },
    {
      id: '5',
      title: 'Tesla Model Y',
      description: 'An electric SUV with impressive range and advanced autopilot features',
      date: '2023-05-18',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFUzbHNKkTNDU64DaFZtaQI8rL__8LeanqhQ&usqp=CAU',
    },
    {
      id: '6',
      title: 'DJI Mavic Air 2',
      description: 'A compact and powerful drone for aerial photography and videography',
      date: '2023-06-22',
      imageUrl: 'https://www3.djicdn.com/cms/uploads/c323a1ef546e5e8b8e15bac5974dc217@374*374.jpg',
    },
    {
      id: '7',
      title: 'Microsoft Surface Laptop 4',
      description: 'A premium laptop with a high-resolution touchscreen and powerful performance',
      date: '2023-07-30',
      imageUrl: 'https://www.notebookcheck.net/fileadmin/Notebooks/Microsoft/Surface_Laptop_4_13_i7/IMG_0721.JPG',
    },
    {
      id: '8',
      title: 'Fitbit Charge 5',
      description: 'A fitness tracker with advanced health monitoring and sleek design',
      date: '2023-08-14',
      imageUrl: 'https://static-01.daraz.pk/p/a27fdc52e92bf83e4176c6f0956121e1.jpg_750x750.jpg_.webp',
    },
    {
      id: '9',
      title: 'Nintendo Switch Pro',
      description: 'An upgraded version of the popular gaming console with 4K support',
      date: '2023-09-02',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJpYruZCRH3lEX7pOJnlgAMCUU-hFMEMIFjQ&usqp=CAU',
    },
    {
      id: '10',
      title: 'Bose QuietComfort Earbuds',
      description: 'Premium noise-canceling earbuds for an immersive audio experience',
      date: '2023-10-19',
      imageUrl: 'https://alhamdtech.pk/cdn/shop/products/BoseQuietComfortEarbudsII.1.png?v=1670252348',
    },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Your Posts</Text>
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
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    marginBottom: 16,
    marginTop: 50,
  },
});

export default PostsScreen;
