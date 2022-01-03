import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React from 'react';              //uninstall expo location 
import MovieInfo from './Components/MovieInfo';




export default function App() {
  
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.main}>
        <Text>205/45/16</Text>
        <MovieInfo />
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
