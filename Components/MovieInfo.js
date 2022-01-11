import React, {useState, useEffect} from 'react';
import { View, Text, StyleSheet, Image} from 'react-native';
import { searchByTitle } from '../lib/apiService';
import {globalColors} from '../utils/globalConst';

const {PRIMARY_COLOR, SECONDARY_COLOR, DESCRIPTION_COLOR} = globalColors;

const MovieInfo = () => {
    const [movieData, setMovieData] = useState('green mile')
    useEffect(async () => {
        const ApiRespData = await searchByTitle('spider man')
        setMovieData(ApiRespData);
    }, []);

    return (
        <View style={styles.movieInfo}>
            <Text style={styles.textPrimary}>{movieData.Title}</Text>
            <Image style={styles.movieIcon} source={{ uri: movieData.Poster}} />
            <Text style={styles.textSecondary}>{movieData.Year} </Text>
            <Text style={styles.textDescription}>{movieData.Plot}</Text>
        </View>
    )
}

export default MovieInfo;

const styles = StyleSheet.create({
    movieInfo:{
        flex: 1,
        justifyContent: 'center',
     alignItems:'center',   
    },
    movieIcon:{
        width: 200,
        height:200,
    },
    textPrimary:{
        fontSize:40,
        color: PRIMARY_COLOR,
    },
    textSecondary:{
        fontSize:20,
        color: SECONDARY_COLOR,
        fontWeight:'500',
        marginTop:10,

    },
    textDescription:{
        fontSize:10,
        color: DESCRIPTION_COLOR,
        marginTop:5,
    }
})
