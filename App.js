import {useState , useEffect} from 'react';
import AppLoading from 'expo-app-loading';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import StartPage from './screens/Sprint';
import Navigation from './navigations/Navigation';


export default function App() {

  const [isAppReady, setAppReady] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setAppReady(true);
    }, 1000);
  }, []);

  if (!isAppReady) {
    return (
      <StartPage />
    );
  }

  return (
    <NavigationContainer>
      <Navigation />
    </NavigationContainer>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#97FEED',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
