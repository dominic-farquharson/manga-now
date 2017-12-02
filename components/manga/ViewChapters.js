import React, { Component } from 'react';
import { View, FlatList, Image, Button, Dimensions, StyleSheet } from 'react-native';

export default class ViewChapters extends Component {
  constructor() {
    super();
    this.state ={
      page: 0
    }

    this.renderChapters = this.renderChapters.bind(this);
    this.changePage = this.changePage.bind(this);
  }

  changePage(num) {
    if(this.state.page + num === this.props.data.length || this.state.page + num < 0) return;

    this.setState(prevState => ({
      page: prevState.page + num
    }))
  }

  renderChapters() {
    const chapters = this.props.data;
    // console.log('height ', Dimensions.get('window').height)

    const {height, width } = Dimensions.get('window');

    return (
      <View>
        <Image source={{uri:`https://cdn.mangaeden.com/mangasimg/${this.props.data[this.state.page][1]}`}} style={{width, height}} />
        <Button onPress={() => this.changePage(-1)} title="Back" />
        <Button onPress={() => this.changePage(+1)} title="Next" />
      </View>
    )
  }

  render() {
    return (
      <View>
        {this.renderChapters()}
      </View>
    )
  }
}

// const styles = StyleSheet.create({
//   chapter: {
//     width: Dimensions.get('window').width, 
//     minHeight: Dimensions.get('window').height 
//   }
// })