/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {
    Text,
    AppRegistry,
    View,
    Image,
    StyleSheet,
    TextInput,
    Button,
    ToastAndroid,
    Alert,
    ScrollView
} from 'react-native';
//主要遗漏导包


export default class Base extends Component {
    static navigationOptions = {
        title: '基础组件'
    };

    constructor(props) {
        super(props);
        this.state = {text: 'Useless Placeholder'};
    }

    _click() {
        // var msg = this.state.text.trim();

        ToastAndroid.show('111', ToastAndroid.LONG)
        Alert.alert("你点击了按钮！");

    }

    render() {
        let pic = {
            uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
        };

        return (
            <ScrollView>
                <View style={{
                    flex: 1,
                    flexDirection: 'column',
                    justifyContent: 'center',
                }}>
                    <Text>测试样式22222</Text>
                    <Text>测试样式333</Text>
                    <Image source={pic} style={{width: 110, height: 110}}/>

                    <Text style={styles.bigblue}>字体颜色及字体大小</Text>
                    <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}}/>
                    <View style={{width: 100, height: 100, backgroundColor: 'skyblue'}}/>
                    <View style={{width: 150, height: 150, backgroundColor: 'steelblue'}}/>
                    <View style={{width: 100, height: 100, backgroundColor: 'skyblue'}}/>
                    <TextInput
                        style={{height: 40}}
                        placeholder="Type here to translate!"
                        onChangeText={(text) => this.setState({text})}
                        value={this.state.text}
                    />
                    <Button
                        title={'点击toast提示'}
                        onPress={this._click}
                    />

                </View>
            </ScrollView>);
    }
}


const styles = StyleSheet.create({
    bigblue: {
        color: 'blue',
        fontWeight: 'bold',
        fontSize: 30,
    },
    red: {
        color: 'red'
    },
});