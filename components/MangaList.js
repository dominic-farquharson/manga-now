import React from 'react';
import { FlatList, Text, View } from 'react-native';
import Manga from './Manga';

const MangaList = props => {
  // Specifying key to use for each component
  const keyExtractor = (item) => {
    return item.i
  }

  return (
    <FlatList 
      data={props.data}
      keyExtractor={keyExtractor}
      renderItem={({item}) => (
        <Manga 
          name={item.t} 
          image={`https://cdn.mangaeden.com/mangasimg/${item.im}`}
        />
      )}   
    />
  )
}

export default MangaList;