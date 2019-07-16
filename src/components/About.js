import React from 'react';
import { View, Text } from 'react-native';

class About extends React.PureComponent {
  render() {
    const { textView } = styles;
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'black', }}>
        <Text style={textView}>About</Text>
      </View>
    );
  }
}
const styles = {
  textView: {
    color: '#fff'
  }
};

export { About };
