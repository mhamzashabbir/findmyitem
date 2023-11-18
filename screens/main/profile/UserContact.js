import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, Image, Pressable } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {FontAwesome} from '@expo/vector-icons';
import Map from '../../../components/Map';
import { Clipboard } from 'react-native';

const recentActivity = [
  { id: 1, action: 'Posted a listing', timestamp: '2 hours ago' },
  { id: 2, action: 'Commented on a post', timestamp: '1 day ago' },
  { id: 3, action: 'Saved an item', timestamp: '7 hours ago' },
  { id: 4, action: 'Commented on a post', timestamp: '1 day ago' },
];

const userData = {
  name: 'Muhammad Hamza',
  phone: '+1234567890',
  email: 'hamza@example.com',
  address: '123 Main Street, Cityville',
  userLatitude: 37.7749,
  userLongitude: -122.4194,
};

const copyToClipboard = (text) => {
  Clipboard.setString(text);
  // You can add a toast or alert here to notify the user that the text has been copied
};

const UserContact = () => {
  const { name, phone, email, address, userLatitude, userLongitude } = userData;
  const [mapLayout, setMapLayout] = useState({ width: 0, height: 0 });

  const handleChatPress = () => {

  };

  useEffect(() => {
    if (mapLayout.width !== 0 && mapLayout.height !== 0) {
      // Do something with the layout information
    }
  }, [mapLayout]);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.headerContainer}>
        <Image source={require('../../../assets/user.png')} style={styles.profileImage} />
        <View style={styles.headerTextContainer}>
          <Text style={styles.userName}>{name}</Text>
        </View>
      </View>

      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>Contact Details</Text>
        <View style={styles.contactDetailsContainer}>
          <View style={styles.contactRow}>
            <Text style={styles.contactLabel}>Phone:</Text>
            <Text style={styles.contactValue}>{phone}</Text>
            <Pressable onPress={() => copyToClipboard(phone)}>
             <FontAwesome5 name="copy" size={20} color="#0B666A" style={styles.copyIcon} />
            </Pressable>
          </View>
          <View style={styles.contactRow}>
            <Text style={styles.contactLabel}>Email:</Text>
            <Text style={styles.contactValue}>{email}</Text>
            <Pressable onPress={() => copyToClipboard(email)}>
             <FontAwesome5 name="copy" size={20} color="#0B666A" style={styles.copyIcon} />
            </Pressable>
          </View>
        </View>
      </View>

      <View style={styles.sectionContainer}>
        <View style={styles.addressRow}>
          <Text style={styles.sectionTitle}>Address</Text>
          <Pressable onPress={() => copyToClipboard(address)}>
            <FontAwesome5 name="copy" size={20} color="#0B666A" style={styles.copyIcon} />
          </Pressable>
        </View>
        <Text style={styles.addressText}>{address}</Text>
      </View>

      <View style={styles.sectionContainer} onLayout={(event) => setMapLayout(event.nativeEvent.layout)}>
        <Text style={styles.sectionTitle}>Pin Location</Text>
        <Map userLatitude={userLatitude} userLongitude={userLongitude} mapLayout={mapLayout} address={address} name={name} />
      </View>

      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>Recent Activities</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {recentActivity.map((activity) => (
            <View key={activity.id} style={styles.activityItem}>
              <FontAwesome5 name="history" size={20} color="#0B666A" style={styles.activityIcon} />
              <View style={styles.activityText}>
                <Text>{activity.action}</Text>
                <Text style={styles.timestamp}>{activity.timestamp}</Text>
              </View>
            </View>
          ))}
        </ScrollView>
      </View>

      <Pressable style={styles.chatButton} onPress={handleChatPress}>
        <FontAwesome name="comment" size={24} color="white" />
        <Text style={styles.chatButtonText}>Chat</Text>
      </Pressable>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  headerContainer: {
    alignItems: 'center',
    marginTop: 50,
    paddingHorizontal: 20,
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 40,
  },
  headerTextContainer: {
    flex: 1,
    marginTop: 20,
  },
  userName: {
    fontSize: 24,
    fontWeight: '700',
    color: 'black',
    marginBottom: 10,
  },
  copyButton: {
    color: '#0B666A',
    fontSize: 16,
    marginLeft: 30,

  },
  sectionContainer: {
    margin: 20,
  },
  sectionTitle: {
    fontWeight: '700',
    color: 'black',
    marginBottom: 10,
    fontSize: 20,
  },
  contactDetailsContainer: {
    marginTop: 10,
  },
  contactRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
    justifyContent: 'space-between',
  },
  addressRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  contactLabel: {
    fontSize: 16,
    fontWeight: 'bold',
    marginRight: 5,
    color: 'gray',
  },
  contactValue: {
    fontSize: 16,
    color: 'black',
  },
  addressText: {
    fontSize: 16,
    color: 'black',
  },
  activityItem: {
    backgroundColor: 'white',
    borderColor: '#0B666A',
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
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
    color: 'gray',
    marginTop: 5,
  },
  chatButton: {
    backgroundColor: '#0B666A',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    borderRadius: 10,
    margin: 20,
    alignSelf: 'center',
    width: '90%',
  },
  chatButtonText: {
    fontSize: 18,
    color: 'white',
    marginLeft: 10,
  },
  copyIcon: {
    marginLeft: 10,
  },
  contactValueContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default UserContact;
