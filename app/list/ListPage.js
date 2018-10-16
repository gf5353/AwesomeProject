import React, {Component} from 'react';

import {Text, StyleSheet, View, FlatList, ActivityIndicator} from 'react-native'


export default class ListPage extends Component {
    static navigationOptions = {
        title: '长列表示例'
    };

    constructor(props) {
        super(props);
        this.state = {isLoading: true}
    }


    componentDidMount() {
        return fetch('http://api.apiopen.top/musicBroadcasting')
            .then((response) => {
                if (response.status === 200) {
                    return response.json();
                } else {
                    throw new Error('Something went wrong on api server!');
                }
            })
            .then(json => {
                console.debug(json);
                console.log('data=' + json.result.toString());
                // let json = responseJson.toJSON();
                const array =json.result;
                var arr = [];
                for (let i = 0, size = array.size; i < size; i++) {
                    let objArray = array.get('channellist');
                    for (let j = 0, size = objArray.size; j < size; i++) {
                        let obj = objArray.get(j);
                        arr.push(obj);
                        console.log('data=' + obj.toString());
                    }
                }

                this.setState({
                    isLoading: false,
                    dataSource: array,
                }, function () {

                });

            })
            .catch((error) => {
                console.error(error);
            });
    }

    render() {
        if (this.state.isLoading) {
            return (<View style={{flex: 1, padding: 20}}>
                <ActivityIndicator/>
            </View>);
        }

        return (
            <View style={styles.container}>
                <FlatList
                    data={
                        this.state.dataSource
                    }
                    renderItem={({item}) => <Text style={styles.item}>{item.title}</Text>}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 22
    },
    item: {
        padding: 10,
        fontSize: 18,
        height: 44,
    },
});