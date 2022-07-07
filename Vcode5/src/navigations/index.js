import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from '../screens/HomeScreen';
import DetailScreen from '../screens/DetailScreen';


const RootStack = createStackNavigator();

const RootStackScreeen = () => {
  return (
    <NavigationContainer>
      <RootStack.Navigator>
      <RootStack.Screen name="Home" component={HomeScreen}/>
      <RootStack.Screen name="Detail" component={DetailScreen}/>
      </RootStack.Navigator>
    </NavigationContainer>
  )
}

const App = () => <RootStackScreen />;

export default RootStackScreeen;