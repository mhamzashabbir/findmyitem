// MapComponent.js
import React from 'react';
import { View, StyleSheet } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

const Map = ({ userLatitude, userLongitude, mapLayout }) => {
  if (mapLayout.width === 0 || mapLayout.height === 0) {
    return null;
  }

  return (
    <View style={styles.mapContainer}>
        <MapView
          style={{ width: mapLayout.width, height: 200 }}
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
    </View>
  );
};

const styles = StyleSheet.create({
  mapContainer: {
    width: '100%',
    height: 200,
  },
});

export default Map;
