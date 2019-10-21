/* eslint-disable no-undef */
/* eslint-disable no-restricted-globals */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/jsx-no-undef */
import React from "react";

import { TouchableOpacity, Image, Linking, Text } from "react-native";

const styles = {
  logoStyle: {
    alignSelf: "center",
    width: 30,
    height: 30,
    shadowOpacity: 0.1,
    shadowRadius: 2,
    marginLeft: 5,
    marginRight: 5,
    marginTop: -1,
    tintColor: "#000000"
  }, frag: {
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  }
};
const Logopic = require("../img/poly-hacks.png");

class Logo extends React.PureComponent {
  open = () => {
    Linking.openURL("https://phoenixhacks.com");
  };

  render() {
    const { logoStyle, frag } = styles;
    return (
        <TouchableOpacity onPress={this.open}>
          <Image source={Logopic} style={logoStyle} />
          <Text> Phoenix Hacks</Text>
        </TouchableOpacity>
    );
  }
}

export { Logo };
