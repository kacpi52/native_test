
import { StyleSheet, View, Text } from 'react-native';
import React from 'react';              //uninstall expo location 
import {NavigationContainer} from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Profile from './Components/Profile';
import Home from './Components/Home';
import Icon from 'react-native-ionicons';
import MovieInfo from './Components/MovieInfo';
//import InfoPicker from './Components/InfoPicker';

const BottomTab = createBottomTabNavigator();

export default function App() {
  
  return (
    
    <NavigationContainer>
      <BottomTab.Navigator>
        <BottomTab.Screen name="Home" component={Home} />
        <BottomTab.Screen name="Pro" component={Profile} />
        <BottomTab.Screen name="Movies" component={MovieInfo} />
      </BottomTab.Navigator>
    </NavigationContainer>
  
  )
}


