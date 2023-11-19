import React from 'react';
import { View, StyleSheet } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import colors from '../styles/colors';

const Map = ({ userLatitude, userLongitude, mapLayout, address, name }) => {
  if (mapLayout.width === 0 || mapLayout.height === 0) {
    return null;
  }

  return (
    <View style={styles.mapContainer}>
        <MapView
          style={styles.mapViewContainer}
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
    height: 220,
    width: '100%',
    alignSelf: 'center',
    borderWidth: 2,
    borderColor: colors.green,
  },
  mapViewContainer: {
    height: '100%',
    width: '100%',
  }
});

export default Map;
