import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, Pressable } from 'react-native';
import SearchBar from '../../../components/SearchBar';
import { FontAwesome } from '@expo/vector-icons';
import RecentListings from '../../../components/RecentListing';
import CustomButton from '../../../components/CustomButton';

const name = 'Hamza';

const Home = () => {

  const recentListings = [
    { id: 1, title: 'Lost Phone', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStHaRrepIEifJiPZIzE86XRDvsMHrnihrDbuBdMta80bUQ0vRSwmtf9_jlE-qDvSHUdxg&usqp=CAU' },
    { id: 2, title: 'Found Keys', image: 'https://p7.hiclipart.com/preview/722/611/803/cartoon-key-illustration-a-bunch-of-home-keys-thumbnail.jpg' },
    { id: 3, title: 'Lost Phone', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStHaRrepIEifJiPZIzE86XRDvsMHrnihrDbuBdMta80bUQ0vRSwmtf9_jlE-qDvSHUdxg&usqp=CAU' },
    { id: 4, title: 'Found Keys', image: 'https://p7.hiclipart.com/preview/722/611/803/cartoon-key-illustration-a-bunch-of-home-keys-thumbnail.jpg' },
    { id: 5, title: 'Lost Phone', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStHaRrepIEifJiPZIzE86XRDvsMHrnihrDbuBdMta80bUQ0vRSwmtf9_jlE-qDvSHUdxg&usqp=CAU' },
    { id: 6, title: 'Found Keys', image: 'https://p7.hiclipart.com/preview/722/611/803/cartoon-key-illustration-a-bunch-of-home-keys-thumbnail.jpg' },
  ];

  const handleRecentListing = () => {

  }

  const handleLostPost = () => {

  }

  const handleLostListing = () => {

  }

  const handleFoundPost = () => {

  }

  const handleFoundListing = () => {

  }

  handleSearch = () => {

  }

  return (
    <ScrollView style={styles.container}>
      <View style={styles.GreetingContainer}>
        <FontAwesome name="user-circle" size={35} color="#000" style={styles.userIcon} />
        <Text style={styles.greetingText}>Hi, {name} </Text>
      </View>
      <SearchBar handleSearch={handleSearch}/>

      <RecentListings data={recentListings} onPressListing={handleRecentListing} />

      <View style={styles.itemContainer}>
        <Text style={styles.itemText}>Lost Anything?</Text>
        <View style={styles.buttonContainer}>
          <CustomButton text="Create Post" handleButton={handleLostPost} width={'40%'} height={40} border={10} />
          <CustomButton text="View Listing" handleButton={handleLostListing} width={'40%'} height={40} border={10} />
        </View>
      </View>

      <View style={styles.itemContainer}>
        <Text style={styles.itemText}>Found Anything?</Text>
        <View style={styles.buttonContainer}>
          <CustomButton text="Create Post" handleButton={handleFoundPost} width={'40%'} height={40} border={10} />
          <CustomButton text="View Listing" handleButton={handleFoundListing} width={'40%'} height={40} border={10} />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  GreetingContainer: {
    marginTop: 50,
    flexDirection: 'row',
    alignItems: 'center',
    margin: 10,
  },
  greetingText: {
    color: 'black',
    fontSize: 25,
    fontWeight: '700',
  },
  userIcon: {
    marginRight: 10,
    marginLeft: 10,
  },
  recentContainer: {
    width: '90%' ,
    height: 150,
    borderRadius: 30,
    backgroundColor: '#97FEED',
    margin: 20,
  },
  itemContainer: {
    width: '90%' ,
    height: 150,
    borderRadius: 30,
    backgroundColor: 'white',
    borderColor: '##0B666A',
    borderWidth: 2,
    margin: 20,
  },
  itemText: {
    fontSize: 18,
    fontWeight: '700',
    color: 'black',
    margin: 20,
    textAlign: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  }

});
export default Home;
