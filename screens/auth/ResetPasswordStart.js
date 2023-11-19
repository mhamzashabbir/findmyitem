import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, ScrollView  } from 'react-native';
import { MaterialIcons} from '@expo/vector-icons';


import CustomButton from '../../components/CustomButton';
import colors from '../../styles/colors';

const ResetPasswordStart = ({ navigation }) => {
  const [email, setEmail] = useState('');

  const handleReset = () => {
    navigation.navigate('CodeVerification');
  };

  return (
    <ScrollView contentContainerStyle={styles.container} keyboardDismissMode='ondrag'>
      <Text style={styles.heading}>Reset Password</Text>
      <Text style={styles.text}>Forgot your password? No worries, it happens.</Text>

      <View style={styles.inputContainer}>
        <View style={styles.inputWithIcon}>
          <MaterialIcons name="email" size={24} color={colors.iconColor} style={styles.icon} />
          <TextInput
            style={styles.input}
            placeholder="Enter your Email"
            value={email}
            onChangeText={(text) => setEmail(text)}
          />
        </View>
      </View>

      <CustomButton text="Reset Password" margin={40} width={'83%'} border={10} handleButton={handleReset} />

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
  },
  text: {
    color: colors.black,
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
    backgroundColor: colors.inputBackground,
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
    backgroundColor: colors.inputBackground,
    borderRadius: 10,
    marginTop: 10,
  },
  icon: {
    marginLeft: 10,
  },

});

export default ResetPasswordStart;
