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
      numColumns={2}
      contentContainerStyle={{justifyContent: 'center'}}
      style={{ width: '100%' }}
      keyExtractor={keyExtractor}
      renderItem={({item}) => (
        <Manga 
          name={item.t} 
          image={item.im? `https://cdn.mangaeden.com/mangasimg/${item.im}` : 'https://placehold.it/100x300'}
        />
      )}   
    />
  )
}

export default MangaList;