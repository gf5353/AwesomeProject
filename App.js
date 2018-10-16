/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import React, {Component} from 'react';
import {Text, View, StyleSheet, ScrollView, Button, ToastAndroid, Platform, AppRegistry} from 'react-native';


export default class HelloWorldApp extends Component {// React.Component  与Component

    static navigationOptions = {
        title: '主页'
    };

    constructor(props) {
        super(props);
    }


    render() {
        // function _clickBase() {
        //     this.props.navigation.navigate('Base')
        // }
        //
        // function _clickList() {
        //     ToastAndroid.show('长列表示例', ToastAndroid.LONG)
        // }

        return (
            <ScrollView
                style={{padding: 10}}
            >
                <Text>平台名称：{Platform.OS} 平台版本：{Platform.Version}</Text>

                <Button
                    style={styles.btn}
                    title={'基础组件示例'}
                    onPress={() => {
                        this.props.navigation.navigate('Base')
                    }}
                />
                <Button
                    style={styles.btn}
                    title={'长列表示例'}
                    onPress={() => {
                        this.props.navigation.navigate('ListPage')
                    }}
                />

            </ScrollView>
        );
    }
}
const styles = StyleSheet.create({
    btn: {
        padding: 50,
        margin: 50
    }

});

// const App = StackNavigator({
//     Home: { screen: HelloWorldApp },
//     Base: {screen: HelloWorldApp2},
// });


// AppRegistry.registerComponent(appName, () => App);