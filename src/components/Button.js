import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const Button = ({ onPress, children }) => {
  const { buttonStyle, textStyle } = styles;

  return (
    <TouchableOpacity onPress={onPress} style={buttonStyle}>
      <Text style={textStyle}>{children}</Text>
    </TouchableOpacity>
  );
};

const styles = {
  textStyle: {
    color: '#F8F8F8',
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
    padding: 5,
    paddingBottom: 10,
    bottom: 20
  },
  buttonStyle: {
    width: '70%',
    flexBox: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    position: 'relative',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: 'white',
    backgroundColor: 'purple',
    marginTop: '20%',
    bottom: '10%',
    borderRadius: 2,
    shadowRadius: 2,
    shadowColor: 'purple',
    shadowOpacity: 0.1,
    // borderColor: '#2792eb'
  }
};

export { Button };
