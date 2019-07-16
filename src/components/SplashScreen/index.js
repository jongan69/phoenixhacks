/* eslint-disable prettier/prettier */
import React from 'react';
import { View, ImageBackground } from 'react-native';

class SplashScreen extends React.PureComponent {
  performTimeConsumingTask = async () =>
    new Promise(resolve =>
      setTimeout(() => {
        resolve('result');
      }, 7000)
    );

  async componentDidMount() {
    const data = await this.performTimeConsumingTask();

    if (data !== null) {
      this.props.navigation.navigate('App');
    }
  }

  render() {
    const { viewStyles, container } = styles;
    const imgString = () => {
      const rand = Math.floor(Math.random() * 2) + 1;
      if (rand === 2) {
        return require('../../img//1.gif');
      }
      return require('../../img/2.gif');
    };
    return (
      <View style={viewStyles}>
        <ImageBackground source={imgString()} style={container} />
      </View>
    );
  }
}

const styles = {
  viewStyles: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#060109',
    tintColor: 'black',
    opacity: 0.8,
  },
  textStyles: {
    color: 'white',
    shadowColor: 'black',
    shadowOpacity: 1,
    opacity: 1,
    shadowRadius: 10,
    fontSize: 50,
    marginTop: '70%',
    fontWeight: 'bold',
    alignSelf: 'center',
    alignItems: 'center',
    flex: 1,
  },
  logoStyle: {
    alignSelf: 'center',
    width: 100,
    height: 100,
    shadowOpacity: 0.1,
    shadowRadius: 2,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 20,
    marginBottom: 10,
  },
  container: {
    marginTop: 50,
    resizeMode: 'stretch',
    alignItems: 'center',
    justifyContent: 'center',
    tintColor: 'black',
    display: 'flex',
    height: '95%',
    width: '100%',
    backgroundColor: 'black',
    opacity: 0.4,
  },
};

export { SplashScreen };
