import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome } from '@expo/vector-icons';
import GetStarted from '../screens/main/GetStarted';
import Login from '../screens/auth/Login';
import SignUp from '../screens/auth/SignUp';
import ResetPasswordStart from '../screens/auth/ResetPasswordStart';
import ResetPasswordConfirm from '../screens/auth/ResetPasswordConfirm';
import CodeVerification from '../screens/auth/CodeVerification.js';
import Home from '../screens/main/home/HomeScreen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();


const AuthStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="GetStarted">
      <Stack.Screen
        name="GetStarted"
        component={GetStarted}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="SignUp"
        component={SignUp}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ResetPasswordStart"
        component={ResetPasswordStart}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ResetPasswordConfirm"
        component={ResetPasswordConfirm}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="CodeVerification"
        component={CodeVerification}
        options={{ headerShown: false , title: 'Reset Password' , headerTitleAlign: 'center', headerStyle: {backgroundColor: '#97FEED'}     }}
      />
    </Stack.Navigator>
);
}


const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
}

const PostStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Posts" component={Login} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
}

const ProfileStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Profile" component={SignUp} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
}

const MainTab = () => {
  return (
    <Tab.Navigator initialRouteName='Home'>
      <Tab.Screen
        name="Posts"
        component={PostStack}
        options={{
          tabBarIcon: ({ color, size, focused }) => (
              <FontAwesome
                  name="list"
                  color={focused ? '#97FEED' : 'black'}
                  size={30}
              />
          ),
          headerShown: false
        }}
      />
      <Tab.Screen
        name="Home"
        component={HomeStack}
        options={{
          tabBarIcon: ({ color, size, focused }) => (
              <FontAwesome
                  name="home"
                  color={focused ? '#97FEED' : 'black'}
                  size={30}
              />
          ),
          headerShown: false
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileStack}
        options={{
          tabBarIcon: ({ color, size, focused }) => (
              <FontAwesome
                  name="user"
                  color={focused ? '#97FEED' : 'black'}
                  size={30}
              />
          ),
          headerShown: false
        }}
      />
    </Tab.Navigator>
  );
}

const MainStack = () => {
  return (
    <Stack.Navigator initialRouteName='Home'>
      <Stack.Screen name="Auth" component={AuthStack} options={{ headerShown: false }} />
      <Stack.Screen name="MainTab"component={MainTab} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
};

export default MainStack;
