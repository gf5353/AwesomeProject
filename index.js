/** @format */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import {StackNavigator} from "react-navigation";
import Base from "./base";
import {Component} from "react";
import React from "react";
import ListPage from "./app/list/ListPage"


const RootStack = StackNavigator(
    {//定义路由
        Home: {                       //定义Home对应HomeScreen组件
            screen: App,
        },
        Base: {
            screen: Base,
        },
        ListPage: {
            screen: ListPage,
        },
    },
    {//定义配置
        initialRouteName: 'Home',     //设置初始路由为Home
    }
);

class Router extends Component {
    render() {                            //将Navigation作为根路径导出
        return <RootStack/>
    }
}

AppRegistry.registerComponent(appName, () => Router);


