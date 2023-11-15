import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Pressable, ScrollView } from 'react-native';



import CustomButton from '../../components/CustomButton';

const CodeVerification = ({ navigation }) => {
  const [code, setCode] = useState('');

  const handleVerify = () => {
    navigation.navigate('ResetPasswordConfirm');
  };

  const handleResendCode = () => {
  };

  return (
      <ScrollView contentContainerStyle={styles.container} keyboardDismissMode='ondrag'>
        <Text style={styles.heading}>Reset Password</Text>
        <Text style={styles.subtitle}>Enter Verification Code</Text>

        <View style={styles.codeContainer}>
          {[...Array(4)].map((_, index) => (
            <TextInput
              key={index}
              style={styles.codeInput}
              maxLength={1}
              keyboardType="numeric"
              value={code[index]}
              onChangeText={(text) => {
                const newCode = [...code];
                newCode[index] = text;
                setCode(newCode);
              }}
            />
          ))}
        </View>

        <Pressable  onPress={handleResendCode}>
          <Text style={styles.resendCodeText}>Resend Code?</Text>
        </Pressable>

        <CustomButton text="Verify" margin={40} handleButton={handleVerify} />

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
    marginBottom: 80,
  },
  subtitle: {
    color: '#000',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 50,
  },
  codeContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 20,
  },
  codeInput: {
    width: 50,
    height: 50,
    borderWidth: 1,
    borderColor: '#97FEED',
    backgroundColor: '#97FEED',
    borderRadius: 10,
    textAlign: 'center',
    marginHorizontal: 10,
    fontSize: 20,
  },
  resendCodeText: {
    color: '#0B666A',
    fontSize: 15,
    fontWeight: '700',
    marginLeft: 160,
    marginBottom: 20,
  }
});

export default CodeVerification;
