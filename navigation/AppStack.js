import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';


import HomeScreen from '../screens/HomeScreen';

const Stack = createStackNavigator();



export default function AppStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen options={{headerShown: false}} name="Home" component={HomeScreen} />
    </Stack.Navigator>
  );
}




