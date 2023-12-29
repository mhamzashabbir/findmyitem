import React from 'react';
import { Pressable, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import colors from '../styles/colors';

const BackButton = ({ onPress }) => {
  return (
    <Pressable style={styles.button} onPress={onPress}>
      <FontAwesome name="chevron-left" size={24} color={colors.back} />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    marginLeft: 15,
    marginTop: 50,
  },
});

export default BackButton;
