import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import loading from './assets/loading.gif';
import Heading from './components/Heading';
import MangaList from './components/MangaList';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      manga: null,
      loaded: false,
      page: 0 // change page
    }

    // binding
    this.displayMangas = this.displayMangas.bind(this);
  }
  componentDidMount() {
    const url = 'https://www.mangaeden.com/api/list/0/?p=1';
    fetch(url)
      .then(res => {
        if(!res.ok) throw Error(res.statusText);
        return res.json()
      })
      .then(res => {
        this.setState({
          manga: res.manga,
          loaded: true
        })
      })
      .catch(err => console.log('err fetching ', err))

  }

  displayMangas() {
    return this.state.loaded?
      <MangaList data={this.state.manga.slice(0, 30)} />
      : <Image source={loading} style={styles.loading} />
  }

  render() {
    return (
      <View style={styles.container}>
        <Heading content="Manga List" />
        {this.displayMangas()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(24, 31, 38)',
    alignItems: 'center',
    paddingTop: 40,
  },
  loading: {
    // width: 50,
    flex:.5
  },
});
