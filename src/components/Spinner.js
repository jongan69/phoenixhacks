import React from 'react';
import { View, ActivityIndicator } from 'react-native';


const Spinner = ({ size }) => (
  <View style={styles.spinnerStyle}>
    <ActivityIndicator size={size || 'large'} />
  </View>
);

const styles = {
  spinnerStyle: {
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center'
  }
};

export { Spinner };
