import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, Image, Pressable } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { FontAwesome } from '@expo/vector-icons';

// Dummy data for recent activities
const recentActivity = [
  { id: 1, action: 'Posted a listing', timestamp: '2 hours ago' },
  { id: 2, action: 'Commented on a post', timestamp: '1 day ago' },
  { id: 3, action: 'Saved an item', timestamp: '7 hours ago' },
  { id: 4, action: 'Commented on a post', timestamp: '1 day ago' },
];

// Dummy data for user details
const userData = {
  name: 'Muhammad Hamza',
  phone: '+1234567890',
  email: 'hamza@example.com',
  address: '123 Main Street, Cityville',
  userLatitude: 37.7749,
  userLongitude: -122.4194,
};

const UserContact = () => {
  const { name, phone, email, address, userLatitude, userLongitude } = userData;
  const [mapLayout, setMapLayout] = useState({ width: 0, height: 0 });

  const handleChatPress = () => {

  }

  // Use useEffect to handle layout changes
  useEffect(() => {
    if (mapLayout.width !== 0 && mapLayout.height !== 0) {
      // Do something with the layout information
    }
  }, [mapLayout]);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.userInfoContainer}>
        <Image
          source={require('../../../assets/user.png')} // Add the correct image source
          style={styles.profileImage}
        />
        <View style={styles.userInfo}>
          <Text style={styles.userName}>{name}</Text>
          <Text style={styles.userDetails}>Phone: {phone}</Text>
          <Text style={styles.userDetails}>Email: {email}</Text>
          <Text style={styles.userDetails}>Address: {address}</Text>
        </View>
      </View>

      <View style={styles.separator} />

      <View style={styles.recentActivitiesContainer} onLayout={(event) => setMapLayout(event.nativeEvent.layout)}>
        <Text style={styles.sectionTitle}>Recent Activities</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {recentActivity.map((activity) => (
            <View key={activity.id} style={styles.activityItem}>
              <FontAwesome name="history" size={20} color="#0B666A" style={styles.activityIcon} />
              <View style={styles.activityText}>
                <Text>{activity.action}</Text>
                <Text style={styles.timestamp}>{activity.timestamp}</Text>
              </View>
            </View>
          ))}
        </ScrollView>
      </View>
      <Text style={styles.MapTitle}>Pin Location</Text>
      {mapLayout.width !== 0 && mapLayout.height !== 0 && (
        <MapView
          style={styles.mapContainer}
          initialRegion={{
            latitude: userLatitude,
            longitude: userLongitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        >
          <Marker
            coordinate={{ latitude: userLatitude, longitude: userLongitude }}
            title={name}
            description={`Address: ${address}`}
          />
        </MapView>
      )}

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
  userInfoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 50,
    paddingHorizontal: 5,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 75,
    marginRight: 20,
  },
  userInfo: {
    flex: 1,
  },
  userName: {
    fontSize: 24,
    fontWeight: '700',
    color: 'black',
    marginBottom: 10,
  },
  contactDetails: {
    marginTop: 10,
    width: '80%',
  },
  contactRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
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
  separator: {
    height: 1,
    backgroundColor: '#0B666A',
    marginVertical: 16,
  },
  recentActivitiesContainer: {
    margin: 10,
    marginRight: 10,
  },
  sectionTitle: {
    fontWeight: '700',
    color: 'black',
    marginBottom: 10,
    fontSize: 20,
  },
  MapTitle: {
    fontWeight: '700',
    color: 'black',
    marginBottom: 10,
    fontSize: 20,
    marginLeft: 10,
    marginTop: 30,
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
  mapContainer: {
    backgroundColor: '#E5E5E5',
    borderRadius: 10,
    justifyContent: 'center',
    height: 200,
    marginLeft: 10,
    width: '95%',
  },
  chatButton: {
    backgroundColor: '#0B666A',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    borderRadius: 10,
    marginTop: 50,
    marginLeft: 10,
    width: '95%',
  },
  chatButtonText: {
    fontSize: 18,
    color: 'white',
    marginLeft: 10,
  },
});

export default UserContact;
