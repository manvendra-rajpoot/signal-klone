import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';
import Login from './pages/Login';
import Register from './pages/Register';
import Home from './pages/Home';

const Stack = createStackNavigator();

const globalScreenOptions = {
  headerStyle: { backgroundColor: '#2089dc' },
  headerTitleStyle: { color: 'white' },
  headerTinColor: 'white',
}

export default function App() {
  return (
    <NavigationContainer>
      
      <Stack.Navigator initialRouteName='Home' screenOptions={globalScreenOptions}>
        <Stack.Screen name='Sign In' component={Login} />
        <Stack.Screen name='Register' component={Register} />
        <Stack.Screen name='Home' component={Home} />
      </Stack.Navigator>

    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
