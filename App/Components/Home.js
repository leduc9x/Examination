import React, { Component } from 'react';
import {
    Text,
    SafeAreaView,
    View,
    ImageBackground,
    ScrollView,
    TouchableOpacity,
    Image,
    StatusBar,
} from 'react-native';
import { DrawerActions } from 'react-navigation-drawer';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icons from 'react-native-vector-icons/FontAwesome5';
import styles from './Styles/HomeStyles';
export default class Home extends Component {
    static navigationOptions = {
        title: "Trang chủ",
    }
    componentDidMount() {
        this.props.navigation.closeDrawer();
    }
    render() {
        return (
            <>
                <StatusBar barStyle="dark-content" backgroundColor="transparent" translucent={true} />
                <SafeAreaView style={styles.container}>
                    <ScrollView>
                        <ImageBackground style={styles.bglogo}
                            source={require('../Images/bg.jpg')}>
                            <View>
                                <View style={styles.head}>
                                    <TouchableOpacity
                                        onPress={() => this.props.navigation.openDrawer()}
                                        style={styles.icon}>
                                        <Text style={styles.txt}>A</Text>
                                    </TouchableOpacity>
                                    <Image style={styles.logo}
                                        source={require('../Images/TD-logo.png')} />
                                    <Text style={styles.title}>
                                        DỊCH VỤ CÔNG TÂN DÂN
                            </Text>
                                </View>
                                <View style={styles.body}>
                                    <View style={styles.row}>
                                        <TouchableOpacity
                                            style={styles.iconButtom}
                                            onPress={() => { this.props.navigation.navigate('Dvhcc') }}
                                        >
                                            <Icon name="bank" size={20} color={'blue'} />
                                        </TouchableOpacity>
                                        <TouchableOpacity
                                            style={styles.iconButtom}
                                            onPress={() => { this.props.navigation.navigate('Paht') }}
                                        >
                                            <Icons name="mail-bulk" size={22} color={'green'} />
                                        </TouchableOpacity>
                                        <TouchableOpacity
                                            style={styles.iconButtom}
                                            onPress={() => { this.props.navigation.navigate('Dulich') }}
                                        >
                                            <Icons name="umbrella-beach" size={22} color={'green'} />
                                        </TouchableOpacity>
                                        <TouchableOpacity
                                            style={styles.iconButtom}
                                            onPress={() => { this.props.navigation.navigate('Ttcb') }}
                                        >
                                            <Icon name="warning" size={24} color={'red'} />
                                        </TouchableOpacity>
                                    </View>
                                    <View style={styles.row}>
                                        <Text style={styles.titleButtom}> Dịch vụ hành chính công</Text>
                                        <Text style={styles.titleButtom}> Phản ánh hiện trường</Text>
                                        <Text style={styles.titleButtom}> Du lịch</Text>
                                        <Text style={styles.titleButtom}> Thông tin cảnh báo</Text>
                                    </View>
                                    <View style={styles.row}>
                                        <TouchableOpacity
                                            style={styles.iconButtom}
                                            onPress={() => { this.props.navigation.navigate('Thongke') }}
                                        >
                                            <Icons name="chart-pie" size={20} color={'red'} />
                                        </TouchableOpacity>
                                        <TouchableOpacity
                                            style={styles.iconButtom}
                                            onPress={() => { this.props.navigation.navigate('Yte') }}
                                        >
                                            <Icons name="hospital-alt" size={22} color={'green'} />
                                        </TouchableOpacity>
                                        <TouchableOpacity 
                                        style={styles.iconButtom}
                                        onPress={()=>{this.props.navigation.navigate('Gctt')}}
                                        >
                                            <Icons name="chart-line" size={22} color={'green'} />
                                        </TouchableOpacity>
                                    </View>
                                    <View style={styles.row}>
                                        <Text style={styles.titleButtom}> Thống kê</Text>
                                        <Text style={styles.titleButtom}> Y tế</Text>
                                        <Text style={styles.titleButtom}> Giá cả thị trường</Text>
                                    </View>
                                </View>
                            </View>
                        </ImageBackground>
                    </ScrollView>
                </SafeAreaView>
            </>
        );
    }
}

