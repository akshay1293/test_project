import React from 'react';
import {
    Text,
    TextInput,
    View,
    StyleSheet,
    TouchableHighlight
} from 'react-native';


export default class OtpConfirm extends React.Component {

    render() {
        //console.log(this.props.route.otp);
        return (
            <View style={styles.container}>
                <Text style={{ fontSize: 16, marginLeft: 48 }}>Enter OTP</Text>
                <TextInput style={styles.inputOtp} keyboardType="numeric" maxLength={6}></TextInput>
                <TouchableHighlight style={{ alignItems: 'center', backgroundColor: 'lightgreen', marginLeft: 48, padding: 16, width: 256 }} underlayColor="limegreen">
                    <Text style={{ color: 'white', fontSize: 16 }}>Submit OTP</Text>
                </TouchableHighlight>

            </View>
        );
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
    }
})