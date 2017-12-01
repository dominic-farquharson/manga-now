import React from 'react';
import { Text, Image, View, StyleSheet } from 'react-native';

const Manga = props => {
  return (
    <View style={styles.mangaContainer}> 
      <Text id={props.id} key={props.id} style={styles.title}>
        {props.name}
      </Text>
      <Image 
        source={{url: props.image}}
        style={styles.cover}
      />
    </View>
  )
}

export default Manga;

const styles = StyleSheet.create({
  mangaContainer: {
    alignItems: 'center',
    width: '50%',
    height: 200,
  },
  title: {
    color: 'white', 
    height: '10%'
  },
  cover: {
    width: 100, 
    height: '90%'
  }
})