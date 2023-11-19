import React from 'react';
import { View, Image, StyleSheet, Text, TouchableOpacity } from 'react-native';
import colors from '../styles/colors';


const CustomButton = (props) => {
  const styles = StyleSheet.create({
    button: {
      width: props.width || 240,
      height: props.height || 48,
      borderRadius: props.border || 30,
      backgroundColor: colors.buttonBackground,
      justifyContent: 'center',
      alignItems: 'center',
      margin: props.margin || 0,
      marginRight: props.marginRight || 10,
      marginLeft: props.marginLeft || 10,
      marginBottom: props.marginBottom || 10,
    },
    buttonText: {
      color: colors.buttonText,
      fontSize: props.fontSize || 18,
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
