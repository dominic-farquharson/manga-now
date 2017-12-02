import React, {Component} from 'react';
import Heading from '../Heading';
import ViewChapters from './ViewChapters';
import { ScrollView, Text, Button, Image, FlatList, Alert, View, StyleSheet } from 'react-native';

class Manga extends Component {
  constructor() {
    super();
    this.state = {
      data: null,
      loaded: false,
      viewChapters: false,
      chapters: null
    }

    this.chapters = this.chapters.bind(this);
    this.content = this.content.bind(this);
    this.fetchChapters = this.fetchChapters.bind(this);
    this.toggleChapters = this.toggleChapters.bind(this);
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
    if(this.state.loaded && !this.state.viewChapters) {
      return <Text style={{color: 'white'}}>{this.state.data.description}</Text>
    } else {
      return null
    }
  }

  fetchChapters(chapter_id) {
    const url = `https://www.mangaeden.com/api/chapter/${chapter_id}`;
    fetch(url)
      .then(res =>{
        if(!res.ok) throw Error(res.statusText);
        return res.json();
      })
      .then(res => {
        this.setState({
          chapters: res.images,
          viewChapters: true
        })
      })
      .catch(err => {
        // eventually handle errors
        console.log('error fetching chapters ', err)
      })
  }

  toggleChapters() {
    this.setState({
      viewChapters: !this.state.viewChapters
    })
  }

  chapters() {
    if(this.state.loaded && !this.state.viewChapters) {
      return (
        <FlatList
          data={this.state.data.chapters}
          keyExtractor={item => item[3]} // chapter's id
          renderItem={({item}) => <Text onPress={()=> this.fetchChapters(item[3])} style={styles.chapterListItem}> Chapter {item[0]}</Text>}
        />
      )
    } else if(this.state.viewChapters) {
      return <ViewChapters toggleChapters={this.toggleChapters} data={this.state.chapters}  />
    } else {
      return <Text style={{color: 'white'}}>Loading...</Text>;
    }
  }

  render() {
  
    return (
      <ScrollView
        // called when content inside changes
        onContentSizeChange={(contentWidth, contentHeight) => {
          console.log('content width height', contentWidth, contentHeight)
        }}
      >
        <Heading content={this.props.data.t} /> 
        {!this.state.viewChapters? <Image 
          source={{uri: `https://cdn.mangaeden.com/mangasimg/${this.props.data.im}`}}
          style={{width: 100, height: 300}}
        /> : null }
        <View>
          {this.content()}
          {this.chapters()}
        </View>
        <Button onPress={!this.state.viewChapters? this.props.toggleMangaView : this.toggleChapters  } title="Close" />  
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  chapterListItem: {
    color: 'white',
    padding: 6,
    borderTopWidth: 1,
    borderColor: 'white'
  }
})


export default Manga;