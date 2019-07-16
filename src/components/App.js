/* eslint-disable comma-dangle */
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { SplashScreen } from './SplashScreen';
import HomeScreen from './HomeScreen';

const InitialNavigator = createSwitchNavigator({
  Splash: SplashScreen,
  App: HomeScreen
});

export default createAppContainer(InitialNavigator);
