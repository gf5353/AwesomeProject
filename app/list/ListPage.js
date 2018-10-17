import React, {Component} from 'react';

import {Text, StyleSheet, View, FlatList,Image, ActivityIndicator,TouchableHighlight,ToastAndroid} from 'react-native'


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
                console.log('data size=' + array.length);

                for (let i = 0, size = array.length; i < size; i++) {
                    let objArray = array[i].channellist;
                    for (let j = 0, size = objArray.length; j < size; j++) {
                        let obj = objArray[j];
                        arr.push(obj);
                        // console.log('data=' + obj.toJSON());
                    }
                }

                this.setState({
                    isLoading: false,
                    dataSource: arr,
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
                    renderItem={({item}) =>
                        <TouchableHighlight
                            onPress={() => {
                                ToastAndroid.show(item.name, ToastAndroid.LONG)
                            }
                            }
                        >
                            <View>
                                <Image
                                    source={{uri: item.thumb}}
                                    style={{width: 100, height: 100}}
                                />
                                <Text style={styles.item}>{item.name}  </Text>
                            </View>
                        </TouchableHighlight>
                    }
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