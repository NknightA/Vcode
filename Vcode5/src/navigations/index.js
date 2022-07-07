import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet } from 'react-native';

import HomeScreen from '../screens/HomeScreen';
import DetailScreen from '../screens/DetailScreen';


const RootStack = createStackNavigator();


const RootStackScreeen = () => {
  return (
    
    <NavigationContainer>
   
      <RootStack.Navigator initialRouteName='top' screenOptions={{ headerStyle: styles.header}}>
      <RootStack.Screen name='Home' component={HomeScreen} options={{ title: 'My dev' }}/>
      <RootStack.Screen name='Detail' component={DetailScreen}/>
      </RootStack.Navigator>
    </NavigationContainer>
  )
}
const styles = StyleSheet.create({
  header: {
    borderBottomWidth: 3,
    borderBottomColor: 'blue',
 
  },
});

export default RootStackScreeen;