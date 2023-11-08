import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import Loading from '../components/Loading';

const StartPage = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require('../assets/logo.png')}
      />
      <Loading margin={40} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    position: 'relative',
    backgroundColor: '#97FEED',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  image: {
    width: 394,
    height: 402,
    position: 'absolute',
    top: 56,
    left: -9,
  },
});

export default StartPage;
