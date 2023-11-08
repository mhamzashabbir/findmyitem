import React from 'react';
import { View, Image, StyleSheet, Text, TouchableOpacity } from 'react-native';


const CustomButton = (props) => {
  const styles = StyleSheet.create({
    button: {
      width: 240,
      height: 48,
      borderRadius: 150,
      backgroundColor: '#0B666A',
      justifyContent: 'center',
      alignItems: 'center',
      margin: props.margin || 0,
    },
    buttonText: {
      color: 'white',
      fontSize: 18,
      fontWeight: 'bold',
    }
  });

  return (
    <TouchableOpacity onPress={props.handleButton} style={styles.button}>
      <Text style={styles.buttonText}>{props.text}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
