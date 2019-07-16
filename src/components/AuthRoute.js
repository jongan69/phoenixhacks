/* eslint-disable no-unused-vars */
import React from "react";
import { Button, View, Text } from "react-native";
import {
  createSwitchNavigator,
  createNavigationContainer
} from "react-navigation";
import { Card, CardSection, LoginScreen } from ".";
import HomeScreen from "./HomeScreen";

const styles = {
  card: {
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center"
    // marginTop: '50%',
    // display: 'flex'
  },
  view: {
    backgroundColor: "black",
    height: "100%"
  },
  cardtest: {
    justifyContent: "center",
    alignItems: "center"
  }
};

class AuthRoute extends React.PureComponent {
  render() {
    const { card, view, cardtest } = styles;

    return (
      <View style={view}>
        <Card>
          <CardSection>
            <View style={cardtest}>
              <Text> Did you Pre - Register ? </Text>{" "}
              <Button
                title="Yes"
                onPress={() => this.props.navigation.navigate("Yes")}
              />{" "}
              <Button
                title="No"
                onPress={() => this.props.navigation.navigate("No")}
              />{" "}
            </View>{" "}
          </CardSection>{" "}
        </Card>{" "}
      </View>
    );
  }
}

export default createNavigationContainer(
  createSwitchNavigator(
    {
      screen: AuthRoute,
      Yes: LoginScreen,
      No: HomeScreen
    },
    {
      defaultNavigationOptions: {
        // initialRouteName: 'screen',
        // title: 'Phoenix Hacks',
        headerStyle: {
          backgroundColor: "#8F40BF"
        }
      }
    }
  )
);
