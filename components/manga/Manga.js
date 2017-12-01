import React, {Component} from 'react';
import Heading from '../Heading';
import { View, Text, Button } from 'react-native';

class Manga extends Component {
  constructor() {
    super();
    this.state = {
      data: null,
      loaded: false
    }
  }

  componentDidMount() {
    const url = `https://www.mangaeden.com/api/manga/${this.props.data.i}`
    fetch(url)
      .then(res => {
        if(!res.ok) throw Error(res.statusText);
        return res.json();
      })
      .then(res => {
        this.setState({data: res, loaded: true})
      })
      .catch(err => {
        console.log('error ', err)
      })
  }

  content() {
    if(this.state.loaded) {
      return <Text style={{color: 'white'}}>{this.state.data.description}</Text>
    } else {
      return null
    }
  }

  render() {
  
    return (
      <View>
        <Heading content={this.props.data.t} /> 
        {this.content()}
        <Button onPress={this.props.toggleMangaView} title="Close" color="white" />  
      </View>
    )
  }
}


export default Manga;