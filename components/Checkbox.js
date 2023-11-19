import React from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';

const Checkbox = ({ checked, onChange }) => (
  <Pressable onPress={onChange}>
    <View style={[styles.checkbox, checked && styles.checked]}>
      {checked && <Text style={styles.checkmark}>✓</Text>}
    </View>
  </Pressable>
);

const styles = StyleSheet.create({
  checkbox: {
    width: 24,
    height: 24,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
  },
  checked: {
    backgroundColor: '#97FEED',
  },
  checkmark: {
    color: '#000',
  },
});

export default Checkbox;
