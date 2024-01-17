import {useState , useEffect} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Toast from 'react-native-toast-message';

import StartPage from './screens/main/Sprint';
import MainStack from './navigations/Navigation';
import { AuthProvider } from './store/authProvider';

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
    <AuthProvider>
      <NavigationContainer>
        <MainStack />
        <Toast />
      </NavigationContainer>
    </AuthProvider>
  );
}

