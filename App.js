import {useState , useEffect} from 'react';
import AppLoading from 'expo-app-loading';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import StartPage from './screens/Sprint';
import GetStarted from './screens/GetStarted';

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
    <View>
      {/* <StartPage /> */}
      <GetStarted />
      {/* <Login /> */}
      <StatusBar style="auto" />
    </View>

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
