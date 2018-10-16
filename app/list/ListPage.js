import React, {Component} from 'react';

import {Text} from 'react-native'


export default class ListPage extends Component {
    static navigationOptions = {
        title: '长列表示例'
    };

    constructor(props) {
        super(props);
    }

    render() {
        return <Text>长列表示例</Text>

    }

}
