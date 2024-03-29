import React from 'react';
import { View, Text, Image, StyleSheet, SafeAreaView, Pressable, ScrollView } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import CustomButton from '../../../components/CustomButton';
import colors from '../../../styles/colors';
import { useAuth } from '../../../store/authProvider';

const Profile = ({navigation, route}) => {

  const { user } = useAuth();
  let { updatedName, updatedEmail, updatedPhone, updatedAddress, updateProfileImage } = route.params || {};
  // updatedName = user?.username;
  // updatedEmail = user?.email;
  // updatedPhone = user?.phone.countryCode + user?.phone.number;

  const handleEditProfile = () => {

    navigation.navigate('EditProfile', {
      currentName: updatedName,
      currentEmail: updatedEmail,
      currentPhone: updatedPhone,
      currentAddress: updatedAddress,
      currentProfileImage: updateProfileImage,
    });
  };

  const handleLogout = () => {
    console.log('Logging out...');
    navigation.reset({
      index: 0,
      routes: [{ name: 'Auth' }],
    });
  };

  const renderRecentActivity = () => {
    const recentActivityData = [
      { id: 1, action: 'Posted a listing', timestamp: '2 hours ago' },
      { id: 2, action: 'Commented on a post', timestamp: '1 day ago' },
      { id: 3, action: 'Saved an item', timestamp: '7 hours ago' },
      { id: 4, action: 'Commented on a post', timestamp: '1 day ago' },
    ];

    return (
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Recent Activity</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {recentActivityData.map((activity) => (
            <View key={activity.id} style={styles.activityItem}>
              <FontAwesome name="history" size={20} color={colors.iconColor} style={styles.activityIcon} />
              <View style={styles.activityText}>
                <Text>{activity.action}</Text>
                <Text style={styles.timestamp}>{activity.timestamp}</Text>
              </View>
            </View>
          ))}
        </ScrollView>
      </View>
    );
  };

  const renderSavedItems = () => {
    const savedItemsData = [
      { id: 1, itemName: 'Apple Watch', category: 'Lost Item' },
      { id: 2, itemName: 'Mac Book', category: 'Found Item' },
      { id: 3, itemName: 'Black Wallet', category: 'Lost Item' },
      { id: 4, itemName: 'Car Keys', category: 'Found Item' },
    ];

    return (
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Saved Items</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {savedItemsData.map((item) => (
            <View key={item.id} style={styles.savedItem}>
              <FontAwesome name="bookmark" size={20} color={colors.iconColor} style={styles.savedIcon} />
              <View style={styles.savedText}>
                <Text>{item.itemName}</Text>
                <Text style={styles.category}>{item.category}</Text>
              </View>
            </View>
          ))}
        </ScrollView>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.profileContainer}>

        <Image
          source={updateProfileImage || require('../../../assets/user.png')}
          style={styles.profileImage}
        />

        <View style={styles.userInfo}>
          <Text style={styles.userName}>{updatedName || 'Muhammad Hamza'}</Text>
          <Text style={styles.userEmail}>{updatedEmail || 'hamza@gmail.com'}</Text>
          <Text style={styles.userDetails}>
            Phone: {updatedPhone || '+92309218288'}
          </Text>
          <Text style={styles.userDetails}>
            Address: {updatedAddress || 'House 123, Street 123, Islamabad'}
          </Text>
        </View>

        <View style={styles.buttonContainer}>
          <CustomButton text="Edit Profile" handleButton={handleEditProfile} width={'40%'} height={40} border={10} />
          <CustomButton text="Logout" handleButton={handleLogout} width={'40%'} height={40} border={10} />
        </View>
      </View>
      {renderRecentActivity()}
      {renderSavedItems()}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.mainBackground,
  },
  profileContainer: {
    alignItems: 'center',
    marginVertical: 20,
    marginTop: 50,
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 10,
  },
  userInfo: {
    alignItems: 'center',
    marginBottom: 20,
  },
  userName: {
    fontSize: 24,
    fontWeight: '700',
    color: colors.black,
  },
  userEmail: {
    fontSize: 16,
    color: colors.gray,
  },
  userDetails: {
    flexDirection: 'row',
    alignItems: 'center',
    fontSize: 16,
    color: colors.black,
    marginVertical: 5,
  },
  icon: {
    marginRight: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  section: {
    marginVertical: 20,
    width: '95%',
    marginLeft: 10,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: colors.black,
    marginBottom: 10,
  },
  activityItem: {
    backgroundColor: colors.mainBackground,
    borderColor: colors.green,
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
    marginRight: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  activityIcon: {
    marginRight: 10,
  },
  activityText: {
    flexShrink: 1,
  },
  timestamp: {
    fontSize: 12,
    color: colors.gray,
    marginTop: 5,
  },
  savedItem: {
    backgroundColor: 'white',
    borderColor: colors.green,
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
    marginRight: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  savedIcon: {
    marginRight: 10,
  },
  savedText: {
    flexShrink: 1,
  },
  category: {
    fontSize: 12,
    color: colors.gray,
    marginTop: 5,
  },
});

export default Profile;
