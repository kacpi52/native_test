import React, {useState, useEffect} from 'react'
import { View, Text, StyleSheet, Image} from 'react-native'
import { searchByTitle } from '../lib/apiService';

const MovieInfo = () => {
    const [movieData, setMovieData] = useState('green mile')
    useEffect(async () => {
        const ApiRespData = await searchByTitle('shrek')
        setMovieData(ApiRespData);
    }, []);

    return (
        <View style={styles.movieInfo}>
            <Text>{movieData.Title}</Text>
            <Image style={styles.movieIcon} source={{ uri: movieData.Poster}} />
            <Text>{movieData.Year}</Text>
        </View>
    )
}

export default MovieInfo;

const styles = StyleSheet.create({
    movieInfo:{
     alignItems:'center',   
    },
    movieIcon:{
        width: 200,
        height:200,
    }
})
