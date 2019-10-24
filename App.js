/* eslint-disable comma-dangle */
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { SplashScreen } from './src/components/SplashScreen';
import HomeScreen from './src/components/HomeScreen';

const InitialNavigator = createSwitchNavigator({
  Splash: SplashScreen,
  App: HomeScreen
});

export default createAppContainer(InitialNavigator);
