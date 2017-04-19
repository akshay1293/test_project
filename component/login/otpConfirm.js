import React from 'react';
import {
    Text,
    TextInput,
    View,
    StyleSheet,
} from 'react-native';


export default class OtpConfirm extends React.Component {

    render() {

        return (
            <View style={styles.container}>
                <TextInput style={styles.inputOtp} placeholder="Enter OTP" keyboardType="numeric" maxLength={6} returnKeyType='next' ></TextInput>
            </View>
        );
    }
}

const styles = StyleSheet.create({

    container: {

        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    inputOtp: {

        width: 100,
        textAlign: 'center',
    }
})