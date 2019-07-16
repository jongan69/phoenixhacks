/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { View, Dimensions } from 'react-native';

// Now we need to pass components as props to this
// view component for the  loading screens
const CardSection = props => (
  <View style={styles.containerStyle}>
    {props.children}
  </View>
);

const styles = {
  containerStyle: {
    padding: 5,
    borderRadius: 5,
    backgroundColor: 'white',
    minWidth: Dimensions.get('screen').width * 0.65,
    alignContent: 'center',
    display: 'flex',
    resizeMode: 'stretch',
    borderColor: 'purple',
    shadowColor: 'purple',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevtaion: 2,
    marginTop: '70%'
  }
};

export { CardSection };
