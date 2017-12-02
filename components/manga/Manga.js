import React, {Component} from 'react';
import Heading from '../Heading';
import { ScrollView, Text, Button, Image, FlatList, Alert, View } from 'react-native';

class Manga extends Component {
  constructor() {
    super();
    this.state = {
      data: null,
      loaded: false
    }

    this.chapters = this.chapters.bind(this);
    this.content = this.content.bind(this);
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

  chapters() {
    if(this.state.loaded) {
      return (
        <FlatList
          data={this.state.data.chapters}
          keyExtractor={item => item[3]} // chapter's id
          renderItem={({item}) => <Text onPress={()=> Alert.alert(item[0])} style={{color: 'white'}}> Chapter {item[0]}</Text>}
        />
      )
    } else {
      return <Text style={{color: 'white'}}>Loading...</Text>;
    }
  }

  render() {
  
    return (
      <ScrollView>
        <Heading content={this.props.data.t} /> 
        <Image 
          source={{uri: `https://cdn.mangaeden.com/mangasimg/${this.props.data.im}`}}
          style={{width: 100, height: 300}}
        />
        <View>
          {this.content()}
          {this.chapters()}
        </View>
        <Button onPress={this.props.toggleMangaView} title="Close" />  
      </ScrollView>
    )
  }
}


export default Manga;