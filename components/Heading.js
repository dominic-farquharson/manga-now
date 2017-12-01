import React from 'react';
import {StyleSheet, Text} from 'react-native';

const Heading = props => {
  return (
    <Text style={styles.heading}>
      {props.content}
    </Text>
  )
}

export default Heading;

const styles = StyleSheet.create({
  heading: {
    color: 'white',
    fontSize: 25,
    marginTop: 20,
    marginBottom: 20
  }
});
