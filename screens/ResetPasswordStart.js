import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Pressable } from 'react-native';
import { MaterialIcons} from '@expo/vector-icons';


import CustomButton from '../components/CustomButton';

const ResetPasswordStart = ({ navigation }) => {
  const [email, setEmail] = useState('');

  const handleReset = () => {

  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Reset Password</Text>
      <Text style={styles.text}>Forgot your password? No worries, it happens.</Text>

      <View style={styles.inputContainer}>
        <View style={styles.inputWithIcon}>
          <MaterialIcons name="email" size={24} color="black" style={styles.icon} />
          <TextInput
            style={styles.input}
            placeholder="Enter your Email"
            value={email}
            onChangeText={(text) => setEmail(text)}
          />
        </View>
      </View>


      <CustomButton text="Reset Password" margin={40} handleButton={handleReset} />

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
  heading: {
    color: '#000',
    fontSize: 30,
    fontWeight: '700',
    lineHeight: 30,
    marginTop: 50,
  },
  text: {
    color: '#000',
    fontStyle: 'normal',
    fontWeight: '400',
    textAlign: 'center',
    marginBottom: 200,
  },
  inputContainer: {
    width: 339,
    height: 56,
    marginTop: 20,
  },
  input: {
    width: '70%',
    height: '70%',
    backgroundColor: '#97FEED',
    borderRadius: 20,
    paddingHorizontal: 16,
    marginHorizontal: 16,
    marginLeft: 0,
  },
  inputWithIcon: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '90%',
    height: '90%',
    marginLeft: 20,
    backgroundColor: '#97FEED',
    borderRadius: 20,
    marginTop: 10,
  },
  icon: {
    marginLeft: 10,
  },

});

export default ResetPasswordStart;
