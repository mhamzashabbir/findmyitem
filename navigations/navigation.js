import { createStackNavigator } from '@react-navigation/stack';
import GetStarted from '../screens/GetStarted';

const Stack = createStackNavigator();

const Navigation = () => {
  return (
    <Stack.Navigator
      initialRouteName="GetStarted">
      <Stack.Screen
        name="GetStarted"
        component={GetStarted}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

export default Navigation;
