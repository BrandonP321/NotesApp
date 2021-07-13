import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import "react-native-gesture-handler";
import { createAppContainer } from "react-navigation";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { LoginScreen, CreateAccountScreen } from './src/screens';
import { RouteNames } from './src/utils/RouteNames';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={RouteNames.CreateAccount}>
        <Stack.Screen
          name={RouteNames.Login}
          component={LoginScreen}
          options={{title: "Login"}}/>
        <Stack.Screen
          name={RouteNames.CreateAccount}
          component={CreateAccountScreen}
          options={{title: "Create Account"}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
