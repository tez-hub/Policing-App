import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import WelcomeScreen from '../screens/WelcomeScreen';
import RegisterScreen from '../screens/RegisterScreen';
import LoginScreen from '../screens/LoginScreen';
import ForgotPasswordScreen from '../screens/ForgotPasswordScreen';
import { color } from 'react-native-reanimated';
import Icon from '@expo/vector-icons/Ionicons'
import Icon2 from '@expo/vector-icons/Entypo'

const Tab = createBottomTabNavigator();
const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: '#f2484c',
        inactiveTintColor: '#000119',
        style:{
          height:65,
          justifyContent:'center',
          paddingVertical:15,
          backgroundColor: '#fff',
          elevation: 2
        }
      }}>

        <Tab.Screen
          name='Welcome'
          component={WelcomeScreen}
          options={{
            tabBarLabel:'',
            tabBarIcon:({ color, size}) => (
              <Icon name='ios-compas' color={color} size={30} />
            )
          }}
        />
        <Tab.Screen
          name='Chat'
          component={ChatScreen}
          options={{
            tabBarLabel:'',
            tabBarIcon:({ color, size}) => (
              <Icon2 name='ios-chat' color={color} size={30} />
            )
          }}
        />
        <Tab.Screen
          name='Profile'
          component={HomeScreen}
          options={{
            tabBarLabel:'',
            tabBarIcon:({ color, size}) => (
              <Icon name='ios-person' color={color} size={30} />
            )
          }}
        />

    </Tab.Navigator>
  )
}


const Stack = createStackNavigator();
const screenOptionStyle = {
  headerShown:false
}

export default function AuthStack() {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle} initialRouteName="Welcome" headerMode="none">
      <Stack.Screen name="Welcome" component={WelcomeScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />
      <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
    </Stack.Navigator>
  );
}
