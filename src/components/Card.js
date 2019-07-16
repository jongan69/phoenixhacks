/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { View } from 'react-native';

// Now we need to pass components as props to this
// view component for the  loading screens
const Card = props => (
  <View style={styles.containerStyle}>
    {props.children}
  </View>
);

const styles = {
  containerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'transparent',
    shadowColor: 'purple',
    borderRadius: 5,
    borderWidth: 2,
    // padding: 5,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevtaion: 2,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 8,
  }
};

export { Card };
