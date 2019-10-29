/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator, DrawerItems } from 'react-navigation-drawer';
import AuthLoadingScreen from '../Components/AuthLoading';
import MenuDrawer from '../Components/MenuDrawer';
import SignIn from '../Components/SignIn';
import SignUp from '../Components/SignUp';
import Setting from '../Components/Setting';
import Home from '../Components/Home';
import Dvhcc from '../Components/Dvhcc';
import Paht from '../Components/Paht';
import Dulich from '../Components/Dulich';
import Ttcb from '../Components/Ttcb';
import Thongke from '../Components/Thongke';
import Yte from '../Components/Yte';
const MyDrawerNavigator = createDrawerNavigator({
  Home: { screen: Home },
  // Setting: { screen: Setting },
  // Dvhcc: {screen: Dvhcc},
  Paht: { screen: Paht },
  // Dulich:{screen: Dulich},
  // Ttcb: { screen: Ttcb },
  // Thongke: { screen: Thongke },
  // Yte: { screen: Yte },
},
  {
    initialRouteName: 'Home',
    drawerWidth: 250,
    drawerPosition: 'left',
    contentComponent: MenuDrawer,//custom draw navigation
  });

const AuthStack = createStackNavigator({ SignIn: SignIn, SignUp: SignUp });

export default createAppContainer(
  createSwitchNavigator(
    {
      AuthLoading: AuthLoadingScreen,
      App: MyDrawerNavigator,
      Auth: AuthStack,
    },
    {
      initialRouteName: 'AuthLoading',
    },
  ),
);

