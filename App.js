import {useState , useEffect} from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import StartPage from './screens/main/Sprint';
import MainStack from './navigations/Navigation';

const Stack = createStackNavigator();

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
        <MainStack />
    </NavigationContainer>
  );
}

