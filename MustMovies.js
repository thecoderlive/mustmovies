import React from 'react'
import { Image, Text, ScrollView, StyleSheet } from 'react-native'

import { item } from './DATA'
import MoviesList from './MoviesList'

const MustMovies = () => (
<ScrollView style={styles.must_movies} showsVerticalScrollIndicator={false}>
<Image
    style={styles.thumb_icon}
    source={{uri: item.thumb_icon}}
   />
<Text style={styles.movies_title}>{item.movies_title}</Text>
<Text style={styles.movies_count}>{item.movies_count}</Text>
<Image
    style={styles.heart_icon}
    source={{uri: item.heart_icon}}
   />
<Text style={styles.like_count}>{item.like_count}</Text>
<Image
    style={styles.menu_icon}
    source={{uri: item.menu_icon}}
   />
<MoviesList item={item.movies_list}/>
</ScrollView>
)

export default MustMovies;

const styles = StyleSheet.create({
    'thumb_icon': {
        'width': '8vw',
        'height': '8vw',
        'margin': 5,
        'alignSelf': 'center'
    },
    'movies_title': {
        'fontSize': 16,
        'fontWeight': '600',
        'paddingHorizontal': 10,
        'paddingTop': 5,
        'textAlign': 'center'
    },
    'movies_count': {
        'color': '#8c8787',
        'fontSize': 18,
        'fontWeight': '600',
        'paddingHorizontal': 10,
        'paddingTop': 5,
        'paddingRight': 1,
        'alignSelf': 'center'
    },
    'heart_icon': {
        'width': '5vw',
        'height': '5vw',
        'margin': 5,
        'alignSelf': 'center'
    },
    'like_count': {
        'color': '#7f7a7a',
        'fontSize': 15,
        'fontWeight': '400',
        'paddingHorizontal': 10,
        'paddingTop': 5,
        'alignSelf': 'center'
    },
    'menu_icon': {
        'width': '5vw',
        'height': '5vw',
        'margin': 5,
        'alignSelf': 'center'
    }
});