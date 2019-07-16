import React from 'react';
import { View, Text } from 'react-native';
import { WebView } from 'react-native-webview';

class FAQS extends React.PureComponent {
  render() {
    const { textView } = styles;
    return (
     <WebView source={{ uri: 'http://phoenixhacks.com/#faq' }} />
    );
  }
}
const styles = {
  textView: {
    color: '#fff'
  }
};
export { FAQS };
