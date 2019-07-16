/* eslint-disable import/no-cycle */
/* eslint-disable import/no-unresolved */
/* eslint-disable react/no-unused-state */
/* eslint-disable react/destructuring-assignment */
import firebase from 'firebase';
import React from 'react';
import { Text, TextInput, View } from 'react-native';
import {
  Menu, MenuOption, MenuOptions, MenuProvider, MenuTrigger
} from 'react-native-popup-menu';
import {
  Button, Card, CardSection, Header
} from './index';


class WalkThrough extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      name: '', budget: '', diet: '', goal: '', error: '', loading: false
    };
  }


  render() {
    const { dropdown, spacing } = styles;
    return (
      <View>
        <Header headerText="Welcome" />
        <Card>

          <View style={spacing}>
            <CardSection>
              <Text>
                {' '}
Welcome to prep it, your custom meal prepping assitant and fitness tracker!
              </Text>
            </CardSection>
          </View>

          <View style={spacing}>
            <CardSection>
              <Text>To get started, please answer these questions for the key to sucess</Text>
            </CardSection>
          </View>

          <View style={spacing}>
            <CardSection>
              <TextInput
                autoCorrect={false}
                onChangeText={name => this.setState({ name })}
                placeholder="What art thou Name?"
                value={this.state.name}
              />
            </CardSection>
          </View>

          <View style={spacing}>
            <CardSection>
              <TextInput
                autoCorrect={false}
                onChangeText={budget => this.setState({ budget })}
                placeholder="What does your weekly budget look like?"
                value={this.state.budget}
              />
            </CardSection>
          </View>

          <Text> What kind of diet interests you ? </Text>
          <View style={dropdown}>


            <MenuProvider>
              <Menu onSelect={diet => this.setState({ diet })}>

                <MenuTrigger>
                  <Text style={styles.headerText}>Diet prefrence</Text>
                </MenuTrigger>


                <MenuOptions>

                  <MenuOption value="Low calorie">
                    <Text style={styles.menuContent}>Low-calorie diet</Text>
                  </MenuOption>


                  <MenuOption value="vegan">
                    <Text style={styles.menuContent}>Vegan</Text>
                  </MenuOption>
                  <MenuOption value="vegitarian">
                    <Text style={styles.menuContent}>Vegitarian</Text>
                  </MenuOption>
                  <MenuOption value="pescatarian">
                    <Text style={styles.menuContent}>pescatarian</Text>
                  </MenuOption>
                  <MenuOption value="no prefrence">
                    <Text style={styles.menuContent}>none</Text>
                  </MenuOption>
                </MenuOptions>
              </Menu>
            </MenuProvider>
          </View>

          <Button>
            <Text> Next </Text>
          </Button>
          <View>
            <Button onPress={() => firebase.auth().signOut()}>
              <Text> logout </Text>
            </Button>
          </View>
        </Card>
      </View>
    );
  }
}
const styles = {
  headerText: {
    fontSize: 10,
    margin: 10,
    fontWeight: 'bold'
  },
  menuContent: {
    color: '#000',
    fontWeight: 'bold',
    padding: 2,
    fontSize: 10
  },
  spacing: {
    marginTop: 10,
    marginBottom: 10,
  },
  dropdown: {
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: 10,
    marginBottom: 80,
    flexDirection: 'row',
  }
};

export { WalkThrough };
