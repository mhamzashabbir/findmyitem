import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Pressable, ScrollView, KeyboardAvoidingView } from 'react-native';
import { MaterialIcons, FontAwesome } from '@expo/vector-icons';
import ModalDropdown from 'react-native-modal-dropdown';

import countries from '../../data/countries';
import CustomButton from '../../components/CustomButton';

const SignUp = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [selectedCountryCode, setSelectedCountryCode] = useState('');

  const handleSignUp = () => {
    navigation.navigate('Login');
  };

  const handleLogin = () => {
    navigation.navigate('Login');
  };

  const handleCountryCodeSelect = (index) => {
    if (countries[index] && countries[index].dial_code) {
      setSelectedCountryCode(countries[index].dial_code);
    } else {
      // Handle the case where the index or dial_code is missing or undefined
      console.error('Invalid country selection');
    }
  };

  return (
      <ScrollView contentContainerStyle={styles.container} keyboardDismissMode='ondrag'>
        <Text style={styles.heading}>Create Account</Text>

        <View style={styles.inputContainer}>
          <View style={styles.inputWithIcon}>
            <MaterialIcons name="account-circle" size={24} color="#0B666A" style={styles.icon} />
            <TextInput
              style={styles.input}
              placeholder="Enter your Username"
              value={username}
              onChangeText={(text) => setUsername(text)}
            />
          </View>
        </View>

        <View style={styles.inputContainer}>
          <View style={styles.inputWithIcon}>
            <MaterialIcons name="email" size={24} color="#0B666A" style={styles.icon} />
            <TextInput
              style={styles.input}
              placeholder="Enter your Email"
              value={email}
              onChangeText={(text) => setEmail(text)}
            />
          </View>
        </View>

        <View style={styles.inputContainer}>
          <View style={styles.inputWithIcon}>
            <MaterialIcons name="phone" size={24} color="#0B666A" style={styles.icon} />
            <ModalDropdown
              options={countries.map((country) => `${country.name} (${country.dial_code})`)}
              defaultValue={`${countries[0].name} (${countries[0].dial_code})`}
              onSelect={handleCountryCodeSelect}
              initialScrollIndex={0}
              style={styles.countryCodeDropdown}
            />
            <TextInput
              style={styles.inputphone}
              placeholder="Phone"
              value={phoneNumber}
              onChangeText={(text) => setPhoneNumber(text)}
              keyboardType="numeric"
            />
          </View>
        </View>

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

        <CustomButton text="SignUp" margin={40} handleButton={handleSignUp} width={'84%'} border={10} />

        <View style={styles.loginContainer}>
          <Text style={styles.loginText}>Already have an account?</Text>
          <Pressable onPress={handleLogin}>
            <Text style={styles.loginLink}>Login</Text>
          </Pressable>
        </View>
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
  inputphone: {
    width: '50%',
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
    borderRadius: 10,
    marginTop: 10,
  },
  icon: {
    marginLeft: 10,
  },
  loginContainer: {
    flexDirection: 'row',
    marginTop: 20,
  },
  loginText: {
    color: '#000',
    fontSize: 18,
    fontWeight: '700',
  },
  loginLink: {
    color: '#0B666A',
    fontSize: 18,
    fontWeight: '700',
    marginLeft: 5,
  },
  showPasswordIcon: {
    marginLeft: 10,
  },
  countryCodeDropdown: {
    width: 100,
    height: '50%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97FEED',
    borderRadius: 20,
    marginLeft: 10,
  },
});

export default SignUp;
