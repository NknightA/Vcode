import React , { Component }from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { Button, StyleSheet } from 'react-native';
import HomeScreen from '../screens/HomeScreen';
import DetailScreen from '../screens/DetailScreen';
import { StyleSheet } from 'react-native-web';
import { checkPluginState } from 'react-native-reanimated/lib/reanimated2/core';
import { StatusBar } from 'expo-status-bar';



const RootStack = createStackNavigator();

const RootStackScreeen = () => {
  return (
    
    <NavigationContainer> 
   <RootStack.Navigator initialRouteName='top' screenOptions={{ headerStyle: styles.header}}>
      <RootStack.Screen name='Home' component={HomeScreen} />
      <RootStack.Screen name='Detail' component={DetailScreen} />
      </RootStack.Navigator>
    </NavigationContainer>
  )
}



const styles = StyleSheet.create({
  header: {
    backgroundColor: 'black',
    height: 0
  },
});

export default RootStackScreeen;