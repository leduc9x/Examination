import React,{ Component } from "react";
import {createDrawerNavigator} from 'react-navigation-drawer';
import { createAppContainer} from 'react-navigation';

import HomeScreen from './HomeScreen';
import Screen1 from './Screen1';
import Screen2 from './Screen2';
import Screen3 from './Screen3';

const MyDrawerNavigator = createDrawerNavigator({
    Home: {screen: HomeScreen},
    Screen1: {screen: Screen1},
    Screen2: {screen: Screen2},
    Screen3: {screen: Screen3},
},
{
    initialRouteName:'Home',
    drawerWidth: 300,
    drawerPosition:'left',
});

const AppContainer = createAppContainer(MyDrawerNavigator);

export default class MyDrawerNavigators extends Component{
    render(){
        return (<AppContainer />);
    }
}