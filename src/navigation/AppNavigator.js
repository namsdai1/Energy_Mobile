import React from 'react';
import {View, StyleSheet, StatusBar, ScrollView} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';

import PlashScreen from '../screens/PlashScreen';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{
        headerTransparent: true,
        headerTitle: '',
        headerTintColor: 'white',
        headerLeftContainerStyle: {
          width: 40,
          height: 40,
          borderRadius: 20,
          backgroundColor: 'rgba(92,90,91,0.7)',
          alignItems: 'center',
          marginLeft: 10,
          marginTop: 5,
        },
      }}>
      <Stack.Screen
        options={{headerShown: false}}
        name="Plash"
        component={PlashScreen}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name="Login"
        component={LoginScreen}
      />
      <Stack.Screen
        name="Register"
        component={RegisterScreen}
        options={{headerShown: false}}
      />
      {/* <Stack.Screen
        name="Tabs"
        component={Tabs}
        options={{headerShown: false}}
      /> */}
      
    </Stack.Navigator>
  );
};


export default AppNavigator;
