import React from 'react';
import { Text, Image, View, StyleSheet, Alert, TouchableOpacity } from 'react-native';

const MangaListItem = props => {
  return (
    <TouchableOpacity
      onPress={() => props.toggleMangaView(props.data)} // onclick
      style={styles.mangaContainer}
      // activeOpacity={1}
    >
      <View> 
        <Text id={props.id} key={props.id} style={styles.title}>
          {props.name}
        </Text>
        <Image 
          source={{uri: props.image}}
          style={styles.cover}
          />
      </View>
    </TouchableOpacity>
  )
}

export default MangaListItem;

const styles = StyleSheet.create({
  mangaContainer: {
    alignItems: 'center',
    width: '50%',
    height: 200,
  },
  title: {
    color: 'white', 
    height: '10%',
    width: 100,
    overflow: 'scroll'
  },
  cover: {
    width: 100, 
    height: '90%'
  }
})