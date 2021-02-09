import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from '../screens/HomeScreen';
import ChatScreen from '../screens/ChatScreen';
import Icon from '@expo/vector-icons/Ionicons'
import Icon2 from '@expo/vector-icons/Entypo'
import { Entypo } from '@expo/vector-icons'; 
import ProfileScreen from '../screens/ProfileScreen';


const Tab = createBottomTabNavigator();
export default function ApStack() {
  return (
    <Tab.Navigator>
      <Tab.Screen
          name='Home'
          component={ProfileScreen}
          options={{
            tabBarLabel:'',
            tabBarIcon:({ color, size}) => (
              <Icon name='ios-home' color={color} size={30} />
            )
          }}
        />
        <Tab.Screen
          name='Chat'
          component={ChatScreen}
          options={{
            tabBarLabel:'',
            tabBarIcon:({ color, size}) => (
              <Entypo name='chat' color={color} size={30} />
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
  );
}