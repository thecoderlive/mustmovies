import React from 'react'
import { Image, View, FlatList, StyleSheet } from 'react-native'



const moviesListItem = ({ item }) => (
<View style={styles.movies_list_item}>
<Image
    style={styles.movies_cover}
    source={{uri: item.movies_cover}}
    />
</View>
  );

const MoviesList = ({ item }) => (
<FlatList
    style={styles.movies_list}
    data={item}
    renderItem={moviesListItem}
    keyExtractor={item => item.id}
    showsVerticalScrollIndicator={false}
    />
);

export default MoviesList;

const styles = StyleSheet.create({
    'movies_cover': {
        'width': '45vw',
        'height': '60vw',
        'marginTop': 10,
        'borderRadius': 10,
        'marginLeft': 10
    }
});