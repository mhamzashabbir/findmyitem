import React from 'react';
import { View, Image, StyleSheet, Text } from 'react-native';
import CustomButton from '../components/CustomButton';

const StartPage = () => {

  const handleButton = () => {
    console.log('Button pressed');
  }

  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require('../assets/logo.png')}
      />
      <Text style={styles.text}>Lost your item?</Text>
      <Text style={styles.text}>Don't worry we got you covered</Text>
      <CustomButton text="Get Started" margin={40} handleButton={handleButton}/>
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
  text: {
    color: '#000',
    fontSize: 18,
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 18,
    textAlign: 'center',
    margin: 2,
  }
});

export default StartPage;
