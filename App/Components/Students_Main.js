import React, { Component } from 'react';
import {
  Text,
  View,
  ScrollableView,
  StatusBar,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './Styles/Students_MainStyles';
import Students_HomeTab from './Students_HomeTab';
import Students_SearchTab from './Students_SearchTab';
import Students_TabBar from './Students_TabBar';
import ScrollableTabView from 'react-native-scrollable-tab-view';

export default class Students_Main extends Component {
  renderTabar() {
    return (
      <View style={styles.linearGradient1}>
        <Icon onPress={() => this.props.navigation.openDrawer()}
          name='navicon'
          color='white'
          size={24}
          style={styles.iconLeft} />
        <Text style={styles.title}>Quản lý sinh viên</Text>
        <Icon onPress={() => this.props.navigation.navigate('HomeScreen')}
          name='home'
          color='white'
          size={25}
          style={styles.iconRight} />
      </View>
    );
  }
  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="dark-content"
            backgroundColor="transparent"
            translucent={true} />
        {this.renderTabar()}
        <ScrollableTabView
          tabBarPosition='bottom'
          initialPage={0}
          renderTabBar={() => <Students_TabBar {...this.props} />}
        >
          <View tabLabel="Trang chủ" style={styles.tabView}>
            <Students_HomeTab {...this.props} />
          </View>
          <View tabLabel="Tìm kiếm" style={styles.tabView}>
            <Students_SearchTab {...this.props} />
          </View>
        </ScrollableTabView>
      </View>
    );
  }
}

