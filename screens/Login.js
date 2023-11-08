import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Pressable } from 'react-native';

import CustomButton from '../components/CustomButton';

const Checkbox = ({ checked, onChange }) => (
  <Pressable onPress={onChange}>
    <View style={[styles.checkbox, checked && styles.checked]}>
      {checked && <Text style={styles.checkmark}>✓</Text>}
    </View>
  </Pressable>
);

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const handleLogin = () => {
    // Implement your login logic here
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Hi, Welcome Back</Text>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Email</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your Email"
          value={email}
          onChangeText={text => setEmail(text)}
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Password</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your Password"
          secureTextEntry={true}
          value={password}
          onChangeText={text => setPassword(text)}
        />
      </View>

      <View style={styles.checkboxContainer}>
        <Checkbox checked={rememberMe} onChange={() => setRememberMe(!rememberMe)} />
        <Text style={styles.checkboxText}>Remember Me</Text>
        <Pressable>
          <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
        </Pressable>
      </View>

      <CustomButton text="Login" margin={40} handleButton={handleLogin}/>

      <View style={styles.signUpContainer}>
        <Text style={styles.signUpText}>Don't have an account?</Text>
        <Pressable>
          <Text style={styles.signUpLink}>Sign Up</Text>
        </Pressable>
      </View>
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
    fontFamily: 'Heebo',
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
    marginBottom: 30
  },
  label: {
    fontSize: 25,
    fontWeight: '700',
    marginBottom: 0,
    marginHorizontal: 20,
  },
  input: {
    width: '90%',
    height: '90%',
    backgroundColor: '#97FEED',
    borderRadius: 20,
    paddingHorizontal: 16,
    marginHorizontal: 16,
  },
  checkboxContainer: {
    flexDirection: 'row',
    width: 300,
    marginHorizontal: 16,
    marginTop: 20,
  },
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
  checkboxText: {
    color: '#000',
    fontSize: 15,
    fontWeight: '700',
    marginLeft: 10,
  },
  forgotPasswordText: {
    color: '#0B666A',
    fontSize: 15,
    fontWeight: '700',
    marginLeft: 40,
  },
  loginButton: {
    backgroundColor: '#0B666A',
    width: 244,
    height: 54,
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  loginButtonText: {
    color: '#000',
    fontSize: 20,
    fontWeight: '700',
  },
  signUpContainer: {
    flexDirection: 'row',
    marginTop: 20,
  },
  signUpText: {
    color: '#000',
    fontSize: 18,
    fontWeight: '700',
  },
  signUpLink: {
    color: '#0B666A',
    fontSize: 18,
    fontWeight: '700',
    marginLeft: 5,
  },
});

export default LoginScreen;
