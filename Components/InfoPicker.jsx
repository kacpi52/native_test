import React, {useState} from 'react';
import { View, Text, StyleSheet, Platform } from 'react-native';
import {Picker} from '@react-native-picker/picker';        // Plot Actors

const InfoPicker = (props) => {
    const [selectedInfo, setSelectedInfo] = useState();
    return (
        <View >
        <View style={styles.infoPicker}>
            <Text style={styles.textSelected}>Choose what do you want to know </Text>
            <Text style={styles.textSelected}>{selectedInfo=='actors'? 'Actors' : 'Description'}</Text>
        </View>
        <View>
            <Picker
            selectedValue={selectedInfo}
            mode='dropdown'
            onValueChange={(itemValue)=>{
                setSelectedInfo(itemValue);
            }}>
                <Picker.Item label='Actors' value='actors' />
                <Picker.Item label='Description' value='desc' />
            </Picker>
        </View>
        </View >
    )
};

export default InfoPicker;

const styles =StyleSheet.create({
    infoPicker: {
        alignItems: 'center',
        position:'absolute',
        margin:30,
        ...Platform.select({
            ios:{
                top:-20,
            },
            android:{
                top:20,
            },
        }),
    },
    textSelected: {
        fontSize: 20,
        color: '#7d00b8',
        margin: 5,
    },
})
