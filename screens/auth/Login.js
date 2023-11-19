import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Pressable, KeyboardAvoidingView , ScrollView} from 'react-native';
import { MaterialIcons, FontAwesome } from '@expo/vector-icons';

import CustomButton from '../../components/CustomButton';
import colors from '../../styles/colors';
import Checkbox from '../../components/Checkbox';

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
              <MaterialIcons name="email" size={24} color={colors.iconColor} style={styles.icon} />
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
              <MaterialIcons name="lock" size={24} color={colors.iconColor} style={styles.icon} />
              <TextInput
                style={styles.input}
                placeholder="Enter your Password"
                secureTextEntry={!showPassword}
                value={password}
                onChangeText={text => setPassword(text)}
              />
              <Pressable onPress={() => setShowPassword(!showPassword)}>
                <FontAwesome name={showPassword ? "eye" : "eye-slash"} size={24} color={colors.iconColor} style={styles.showPasswordIcon} />
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
    backgroundColor: colors.authBackground,
  },
  heading: {
    color: colors.black,
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
    backgroundColor: colors.inputBackground,
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
    backgroundColor: colors.inputBackground,
    borderRadius: 10,
    marginTop: 10,
  },
  checkboxContainer: {
    flexDirection: 'row',
    width: 300,
    marginHorizontal: 16,
    marginTop: 20,
  },
  checkboxText: {
    color: '#000',
    fontSize: 15,
    fontWeight: '700',
    marginLeft: 10,
  },
  icon: {
    marginLeft: 10,
  },
  forgotPasswordText: {
    color: colors.green,
    fontSize: 15,
    fontWeight: '700',
    marginLeft: 40,
  },
  signUpContainer: {
    flexDirection: 'row',
    marginTop: 20,
  },
  signUpText: {
    color: colors.black,
    fontSize: 18,
    fontWeight: '700',
  },
  signUpLink: {
    color: colors.green,
    fontSize: 18,
    fontWeight: '700',
    marginLeft: 5,
  },
  showPasswordIcon: {
    marginLeft: 10,
  },
});

export default Login;
