import React from 'react';
import {
    Text,
    TextInput,
    TouchableHighlight,
    View,
    StyleSheet,
    Image
} from 'react-native';
import Device from 'react-native-device-info';

export default class Login extends React.Component {
    constructor() {
        super();
        this.state = {
            mail: '',
            pass: '',
            loading: true
        };
    }
    render() {
        setTimeout(() => {
            this.setState({
                loading: false
            });
        }, 2000);
        return (

            <View style={{ flex: 1 }}>{this.state.loading ? this.renderLoading() : this.renderLogin()}</View>

        );
    }
    checkSubmit(id) {
        let temp = {
            mail: this.state.mail,
            pass: this.state.pass
        };
        let jsonObj = {
            cups: []
        };

        var RNFS = require('react-native-fs');

        var path = RNFS.DocumentDirectoryPath + '/test.txt';

        RNFS.readFile(path, 'utf8')
            .then((data) => {
                let stringifyData = '';
                if (data === '') {
                    jsonObj.cups.push(temp);
                    stringifyData = JSON.stringify(jsonObj);
                } else {
                    let parseData = JSON.parse(data);
                    parseData.cups.push(temp);
                    stringifyData = JSON.stringify(parseData);
                }

                RNFS.writeFile(path, stringifyData, 'utf8')
                    .then((success) => {
                        RNFS.readFile(path, 'utf8')
                            .then((data) => {
                                console.log(data, path);
                            })
                            .catch((err) => {
                                console.log(err.message);
                            });
                    })
                    .catch((err) => {
                        console.log(err.message);
                    });
            })
            .catch((err) => {
                console.log(err.message);
            });

        this.props.navigator.push(id);
    }

    renderLogin() {

        return (
            <View style={{ backgroundColor: 'white', flex: 1, justifyContent: 'center' }}>
                <Text style={{ fontSize: 48, fontFamily: 'cursive_bold', marginLeft: 32, marginBottom: 32 }}>Sign in</Text>
                <Text style={{ fontSize: 16, marginLeft: 48 }}>Email address</Text>
                <TextInput onChangeText={(mail) => this.setState({ mail })} style={{ marginLeft: 64, width: 256 }} ></TextInput>
                <Text style={{ fontSize: 16, marginLeft: 48 }}>Password</Text>
                <TextInput onChangeText={(pass) => this.setState({ pass })} style={{ marginLeft: 64, width: 256 }} ></TextInput>
                <TouchableHighlight style={{ alignItems: 'center', backgroundColor: 'lightgreen', marginLeft: 64, padding: 16, width: 256 }} underlayColor="limegreen" onPress={() => this.checkSubmit('next')}>
                    <Text style={{ color: 'white', fontSize: 16 }}>Submit</Text>
                </TouchableHighlight>
            </View>
        );
    }

    renderLoading() {

        return (

            <Image style={styles.background} source={require('../../asset/coffee_bg.jpg')}>
                <Text style={styles.title}>Empty Coffee Cups</Text>
                <Text style={{ color: 'white', fontSize: 16 }}>~ no coffee ~ no talkee ~</Text>
            </Image>
        );
    }
}

const styles = StyleSheet.create({
    background: {
        alignItems: 'center',
        flex: 1,
        height: Device.height,
        width: Device.width
    },
    title: {
        color: 'white',
        marginTop: 84,
        fontFamily: 'cursive_bold',
        fontSize: 64
    }
});
