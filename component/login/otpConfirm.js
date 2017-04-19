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

            otp: ''
        }
    }
    render() {

        return (
            <View style={styles.container}>
                <Text style={{ fontSize: 16, marginLeft: 48 }}>Enter OTP</Text>
                <TextInput style={styles.inputOtp} ref='otp' keyboardType="numeric" maxLength={7} onChangeText={(otp) => { this.setState({ otp }) }} ></TextInput>
                <TouchableHighlight style={{ alignItems: 'center', backgroundColor: 'lightgreen', marginLeft: 48, padding: 16, width: 256 }} onPress={() => { this.submitOtp() }} underlayColor="limegreen">
                    <Text style={{ color: 'white', fontSize: 16 }}>Submit OTP</Text>
                </TouchableHighlight>

            </View>
        );
    }

    submitOtp() {

        console.log(this.state.otp);
        console.log(this.props.route.otp);

        if (this.state.otp == this.props.route.otp) {

            this.props.navigator.push({ id: 'name' });
        } else {
            ToastAndroid.show("Please enter a valid otp", ToastAndroid.SHORT);
        }
    }
}

const styles = StyleSheet.create({

    container: {

        flex: 1,

        justifyContent: 'center'
    },
    inputOtp: {
        marginLeft: 48,
        width: 256,
        textAlign: 'center',
    },
})