import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Pressable, KeyboardAvoidingView , ScrollView} from 'react-native';
import { MaterialIcons, FontAwesome } from '@expo/vector-icons';

import CustomButton from '../../components/CustomButton';

const Checkbox = ({ checked, onChange }) => (
  <Pressable onPress={onChange}>
    <View style={[styles.checkbox, checked && styles.checked]}>
      {checked && <Text style={styles.checkmark}>✓</Text>}
    </View>
  </Pressable>
);

const Login = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = () => {
    navigation.replace('MainTab');
  };

  const handleSignup = () => {
    navigation.navigate('SignUp');
  };

  const handleForget = () => {
    navigation.navigate('ResetPasswordStart');
  }

  return (
    <ScrollView
      contentContainerStyle={styles.container}
      keyboardDismissMode="on-drag"
    >
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        <View style={styles.container}>
          <Text style={styles.heading}>Hi, Welcome Back</Text>

          <View style={styles.inputContainer}>
            <Text style={styles.label}>Email</Text>
            <View style={styles.inputWithIcon}>
              <MaterialIcons name="email" size={24} color="#0B666A" style={styles.icon} />
              <TextInput
                style={styles.input}
                placeholder="Enter your Email"
                value={email}
                onChangeText={text => setEmail(text)}
              />
            </View>
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.label}>Password</Text>
            <View style={styles.inputWithIcon}>
              <MaterialIcons name="lock" size={24} color="#0B666A" style={styles.icon} />
              <TextInput
                style={styles.input}
                placeholder="Enter your Password"
                secureTextEntry={!showPassword}
                value={password}
                onChangeText={text => setPassword(text)}
              />
              <Pressable onPress={() => setShowPassword(!showPassword)}>
                <FontAwesome name={showPassword ? "eye" : "eye-slash"} size={24} color="#0B666A" style={styles.showPasswordIcon} />
              </Pressable>
            </View>
          </View>

          <View style={styles.checkboxContainer}>
            <Checkbox checked={rememberMe} onChange={() => setRememberMe(!rememberMe)} />
            <Text style={styles.checkboxText}>Remember Me</Text>
            <Pressable onPress={handleForget}>
              <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
            </Pressable>
          </View>

          <CustomButton text="Login" margin={40} handleButton={handleLogin}  border={10}/>

          <View style={styles.signUpContainer}>
            <Text style={styles.signUpText}>Don't have an account?</Text>
            <Pressable onPress={handleSignup}>
              <Text style={styles.signUpLink}>Sign Up</Text>
            </Pressable>
          </View>
        </View>

      </KeyboardAvoidingView>
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
    marginBottom: 40
  },
  label: {
    fontSize: 25,
    fontWeight: '700',
    marginBottom: 0,
    marginHorizontal: 20,
  },
  input: {
    width: '70%',
    height: '70%',
    backgroundColor: '#97FEED',
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
    borderRadius: 10,
    marginTop: 10,
  },
  checkboxContainer: {
    flexDirection: 'row',
    width: 300,
    marginHorizontal: 16,
    marginTop: 20,
  },
  icon: {
    marginLeft: 10,
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
  showPasswordIcon: {
    marginLeft: 10,
  },
});

export default Login;
