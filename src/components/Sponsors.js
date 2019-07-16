import React from 'react';
import { View, Text } from 'react-native';

class Sponsors extends React.PureComponent {
  render() {
    const { textView } = styles;
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'black', }}>
        <Text style={textView}>Sponsors</Text>
      </View>
    );
  }
}
const styles = {
  textView: {
    color: '#fff'
  }
};

export { Sponsors };
