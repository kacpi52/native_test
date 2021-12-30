import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React, {useEffect, useState} from 'react';
import Location from 'expo-location';

export default function App() {
  const {errorMessage, setErrorMessage} = useState(null);

  useEffect(()=>{
    load()  // funkcja async wywolana pozniej 
  },[])
  const load = async () =>{
    try {
      let { status } = await Location.requestBackgroundPermissionsAsync()
      if (status !='granted'){
        setErrorMessage('Access to location is needed to run the app.')
        return 
      }
      const telLocation = await Location.getCurrentPositionAsync();
      const {latitude , longitude} = telLocation.coords;
      alert(`Latitude : ${latitude} , Longitude : ${longitude}`);

    } catch (error){ 
      
    }
  }
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app! szczurze</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#055255',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
