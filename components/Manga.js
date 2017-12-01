import React from 'react';
import { Text, Image, View } from 'react-native';

const Manga = props => {
  return (
    <View>  
      <Text id={props.id} key={props.id} style={{color: 'white'}}>
        {props.name}
      </Text>
      <Image 
        source={{url: props.image}}
        style={{width: 100, height: 100}}
      />
    </View>
  )
}

export default Manga;