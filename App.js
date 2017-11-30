import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import loading from './assets/loading.gif';

const Heading = props => {
  return (
    <Text style={styles.heading}>
      {props.content}
    </Text>
  )
}


export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      manga: null,
      loaded: false
    }

    // binding
    this.displayMangas = this.displayMangas.bind(this);
  }
  componentDidMount() {
    
  }

  displayMangas() {
    return this.state.loaded?
      <p>Data</p> 
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
  heading: {
    color: 'white',
    fontSize: 25,
    marginTop: 20,
    marginBottom: 20
  }
});
