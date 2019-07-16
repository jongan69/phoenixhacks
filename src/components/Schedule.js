/* eslint-disable linebreak-style */
import React from 'react';
import { View, Text } from 'react-native';

class Schedule extends React.PureComponent {
  render() {
  const { textView } = styles;
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'black', }}>
        <Text style={textView}>Schedule</Text>
      </View>
    );
  }
}
const styles = {
  textView: {
    color: '#fff'
  }
};
export { Schedule };
