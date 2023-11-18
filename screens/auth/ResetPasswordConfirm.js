import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Pressable, ScrollView } from 'react-native';
import { MaterialIcons , FontAwesome } from '@expo/vector-icons';


import CustomButton from '../../components/CustomButton';

const ResetPasswordConfirm = ({ navigation }) => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleReset = () => {
    navigation.navigate('Login')
  };

  return (
    <ScrollView contentContainerStyle={styles.container} keyboardDismissMode='ondrag'>
      <Text style={styles.heading}>Reset Password</Text>

      <View style={styles.inputContainer}>
        <View style={styles.inputWithIcon}>
          <MaterialIcons name="lock" size={24} color="#0B666A" style={styles.icon} />
          <TextInput
            style={styles.input}
            placeholder="Enter your Password"
            secureTextEntry={!showPassword}
            value={password}
            onChangeText={(text) => setPassword(text)}
          />
          <Pressable onPress={() => setShowPassword(!showPassword)}>
            <FontAwesome
              name={showPassword ? "eye" : "eye-slash"}
              size={24}
              color="#0B666A"
              style={styles.showPasswordIcon}
            />
          </Pressable>
        </View>
      </View>

      <View style={styles.inputContainer}>
        <View style={styles.inputWithIcon}>
          <MaterialIcons name="lock" size={24} color="#0B666A" style={styles.icon} />
          <TextInput
            style={styles.input}
            placeholder="Confirm your Password"
            secureTextEntry={!showConfirmPassword}
            value={confirmPassword}
            onChangeText={(text) => setConfirmPassword(text)}
          />
          <Pressable onPress={() => setShowConfirmPassword(!showConfirmPassword)}>
            <FontAwesome
              name={showConfirmPassword ? "eye" : "eye-slash"}
              size={24}
              color="#0B666A"
              style={styles.showPasswordIcon}
            />
          </Pressable>
        </View>
      </View>


      <CustomButton text="Reset Password" margin={40} handleButton={handleReset} />

    </ScrollView>
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
    marginBottom: 100,
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

export default ResetPasswordConfirm;
