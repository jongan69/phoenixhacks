/* eslint-disable linebreak-style */
/* eslint-disable global-require */
/* eslint-disable linebreak-style */
import React from 'react';
import { View, Image, Button } from 'react-native';


const mapImg = require('../img/IST-map.jpg');

class Map extends React.Component {
  render() {
    return (
     <React.Fragment>   
        <Button

          style={{ color: 'blue', flex: 1}}
          title="Top Floor"
        /> 
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Image
          source={mapImg}
          style={{
            transform: [{ rotate: '90deg' }], width: '195%', height: '55%'
          }}
        />     
      </View>
     </React.Fragment> 
    );
  }
}

export { Map };
