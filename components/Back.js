import React from 'react';
import { Pressable, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const BackButton = ({ onPress }) => {
  return (
    <Pressable style={styles.button} onPress={onPress}>
      <FontAwesome name="arrow-left" size={24} color="#000" />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    marginLeft: 10,
  },
});

export default BackButton;
