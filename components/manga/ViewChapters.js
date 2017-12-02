import React, { Component } from 'react';
import { View, FlatList, Image, Button, Dimensions } from 'react-native';

export default class ViewChapters extends Component {
  constructor() {
    super();

    this.renderChapters = this.renderChapters.bind(this);
  }
  renderChapters() {
    const chapters = this.props.data;
    return (
      <FlatList 
        style={{backgroundColor: 'white', width: '100%'}}
        data={chapters}
        keyExtractor={item => item[0]}
        renderItem={({item}) => <Image source={{uri:`https://cdn.mangaeden.com/mangasimg/${item[1]}`}} style={{width: Dimensions.get('window').width, height: Dimensions.get('window').height }} /> }
      />
    )
  }

  render() {
    return (
      <View>
        {this.renderChapters()}
        {/* <Button title="close" onPress={this.props.toggleChapters} /> */}
      </View>
    )
  }
}
