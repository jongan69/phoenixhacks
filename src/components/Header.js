/* eslint-disable comma-dangle */
import React from 'react';
import { Text, View } from 'react-native';

const Header = props => {
  const { header, view } = styles;
  return (
    <View style={view}>
      <Text style={header}>{props.headerText}</Text>
    </View>
  );
};

const styles = {
  header: {
    fontSize: 20,
    justifyContent: 'center',
    alignItems: 'center',
    // top: '100%',
    color: '#8F40BF',
    backgroundColor: '#000000'
  },
  view: {
    // Color: '#8F40BF',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 1,
    paddingBottom: 10,
    // shadowColor: '#2792eb',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.5,
    elevation: 1,
    marginBottom: 1,
    position: 'relative'
  }
};

export { Header };
