import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import React, {useState} from 'react';              //uninstall expo location 
import MovieInfo from './Components/MovieInfo';
import InfoPicker from './Components/InfoPicker';




export default function App() {
  
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.main}>
        <MovieInfo />
        <InfoPicker />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  main: {
    justifyContent:'center',
    flex: 1,
  },
});
