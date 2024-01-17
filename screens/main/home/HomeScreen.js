import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, Pressable } from 'react-native';
import SearchBar from '../../../components/SearchBar';
import { FontAwesome } from '@expo/vector-icons';
import RecentListings from '../../../components/RecentListing';
import CustomButton from '../../../components/CustomButton';
import recentListings from '../../../data/items';
import CategoryList from '../../../components/CategoryList';
import colors from '../../../styles/colors';
import Toast from 'react-native-toast-message';
import { useAuth } from '../../../store/authProvider';

const Home = ({navigation}) => {

  const { user } = useAuth();

  const name = user?.username || 'User';

  const handleRecentListing = (item) => {
    navigation.navigate('UserPostDetails', {
      name: item.name,
      title: item.title,
      description: item.description,
      date: item.date,
      imageUrl: item.imageUrl,
      category: item.category,
      address : item.address
    });
  }

  const handleCreatePost = () => {
    navigation.navigate('CreatePost');
  }


  handleSearch = () => {
    Toast.show({
      type: 'info',
      position: 'top',
      text1: 'Search Feature is not available yet',
    })
  }

  handleUser = () => {
    navigation.navigate('Profile');
  }

  handleViewAllLost = () => {
    navigation.navigate('AllPosts' , {category: 'Lost'});
  }

  handleViewAllFound = () => {
    navigation.navigate('AllPosts', {category: 'Found'});
  }

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false} >
      <View style={styles.GreetingContainer}>
        <FontAwesome name="user-circle" size={35} color={colors.iconColor} style={styles.userIcon} onPress={handleUser} />
        <Text style={styles.greetingText}>Hi, {name} </Text>
      </View>
        <SearchBar marginleft={20} handleSearch={handleSearch}/>

      <RecentListings data={recentListings} onPressListing={handleRecentListing} />

      <View style={styles.sectionContainer}>
        <Text style={styles.sectionText}>Found Anything?</Text>
        <Text style={styles.descriptionText}>Here are some of the items people lost. You can check the listing and contact the owner to return them there belongings.Your little effort can make their day.</Text>
        <CategoryList onPressItem={handleRecentListing} category="Lost" handleViewListing={handleViewAllLost} />
      </View>

      <View style={styles.sectionContainer}>
        <Text style={styles.sectionText}>Lost Anything?</Text>
        <Text style={styles.descriptionText}>Here are some of the items people found. You can find your item in the listing and contact the finder for your belongings. Don't forget to thank them.</Text>
        <CategoryList onPressItem={handleRecentListing} category="Found" handleViewListing={handleViewAllFound} />
      </View>

      {/* <View style={styles.separator} /> */}
      <CustomButton text="Create Post" handleButton={handleCreatePost} width={'95%'} height={50} border={10} fontSize={18} marginBottom={20}/>

    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.mainBackground
  },
  GreetingContainer: {
    marginTop: 50,
    flexDirection: 'row',
    alignItems: 'center',
    margin: 10,
  },
  greetingText: {
    color: colors.black,
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
    backgroundColor: colors.mainBackground,
    margin: 20,
  },
  itemContainer: {
    width: '90%' ,
    height: 150,
    borderRadius: 30,
    backgroundColor: colors.mainBackground,
    borderColor: colors.green,
    borderWidth: 2,
    margin: 20,
  },
  sectionContainer: {
    borderColor: colors.green,
    width: '95%' ,
    borderWidth: 1,
    alignSelf: 'center',
    backgroundColor: colors.mainBackground,
    borderStyle: 'dotted',
    borderRadius: 10,
    marginBottom: 20,
  },
  itemText: {
    fontSize: 18,
    fontWeight: '700',
    color: colors.black,
    margin: 20,
    textAlign: 'center',
  },
  descriptionText: {
    fontSize: 16,
    fontWeight: '300',
    color: colors.gray,
    marginLeft: 20,
    marginRight: 20,
  },
  sectionText: {
    fontSize: 20,
    fontWeight: '700',
    color: colors.black,
    marginLeft: 20,
    marginTop: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  separator: {
    height: 1,
    backgroundColor: colors.green,
    marginVertical: 16,
  },
});
export default Home;
