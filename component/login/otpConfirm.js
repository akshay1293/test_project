import React from 'react';
import {
    Text,
    TextInput,
    View,
    StyleSheet,
    TouchableHighlight,
    ToastAndroid
} from 'react-native';


export default class OtpConfirm extends React.Component {

    constructor() {

        super();
        this.state = {
            userDetail: {
                mail: '',
                name: ''
            },
            otp: ''
        }
    }
    render() {

        return (
            <View style={styles.container}>
                <Text style={{ fontSize: 16, marginRight: 192 }}>Enter OTP</Text>
                <TextInput style={styles.inputOtp} ref='otp' keyboardType="numeric" maxLength={7} onChangeText={(otp) => { this.setState({ otp }) }} ></TextInput>
                <TouchableHighlight style={{ alignItems: 'center', backgroundColor: 'lightgreen', padding: 16, width: 256 }} onPress={() => { this.submitOtp() }} underlayColor="limegreen">
                    <Text style={{ color: 'white', fontSize: 16 }}>Submit OTP</Text>
                </TouchableHighlight>

            </View>
        );
    }

    submitOtp() {
        if (this.state.otp == this.props.route.otp) {
        // if (this.state.otp == 1234) {
            let RNFS = require('react-native-fs');
            let path = RNFS.DocumentDirectoryPath + '/user.txt';
            let mail = this.props.route.mail;
            // let mail = "iamjaghitsingh@gmail.com";
            let firstname = mail.split("@");
            this.setState({
                userDetail: {
                    mail: mail,
                    name: firstname[0]
                }
            }, () => {
                RNFS.writeFile(path, JSON.stringify(this.state.userDetail), 'utf8')
                    .then((success) => {
                        RNFS.readFile(path, 'utf8')
                            .then((data) => {
                                console.log(data);
                            })
                            .catch((err) => {
                                console.log(err.message);
                            });
                    })
                    .catch((err) => {
                        console.log(err.message);
                    });
            });


            // this.props.navigator.push({ id: 'name' });
        } else {
            ToastAndroid.show("Please enter a valid otp", ToastAndroid.SHORT);
        }
    }
}

const styles = StyleSheet.create({

    container: {

        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    inputOtp: {
        // marginLeft: 48,
        width: 256,
        textAlign: 'center',
    },
})