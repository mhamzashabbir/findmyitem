import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import StartPage from './screens/Sprint';
import GetStarted from './screens/GetStarted';

export default function App() {
  return (
    <View>
      {/* <StartPage /> */}
      <GetStarted />
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
