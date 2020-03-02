import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import HomeScreen from './src/screens/HomeScreen';

const navigator = createStackNavigator({
  Home: HomeScreen
},
{
  initialRouteName: 'Home',
  defaultNavigationOptions: {
    title: 'Northeastern News'
  }
});

export default createAppContainer(navigator);