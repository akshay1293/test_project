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
            // pass: '',
            loading: true
        };
    }
    componentDidMount() {
        setTimeout(() => {
            this.setState({
                loading: false
            });
        }, 2000);

    }
    render() {

        return (

            <View style={{ flex: 1 }}>{this.state.loading ? this.renderLoading() : this.renderLogin()}</View>

        );
    }
    checkSubmit(id) {
        let generatedOTP = Math.floor((Math.random() * 999999) + 111111);
        fetch('https://dawdling-loudspeake.000webhostapp.com/mail_api.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                mail: this.state.mail,
                otp: generatedOTP,
            })
        })
            .then((response) => {
                this.props.navigator.push({ id: id, otp: generatedOTP });
            })
            .catch((error) => {
                console.error(error);
            });

    }

    renderLogin() {

        return (
            <View style={{ backgroundColor: 'white', flex: 1, justifyContent: 'center' }}>
                <Text style={{ fontSize: 48, fontFamily: 'cursive_bold', marginLeft: 32, marginBottom: 32 }}>Sign in</Text>
                <Text style={{ fontSize: 16, marginLeft: 48 }}>Email address</Text>
                <TextInput onChangeText={(mail) => this.setState({ mail })} style={styles.input} ></TextInput>
                {/*<Text style={{ fontSize: 16, marginLeft: 48 }}>Password</Text>
                <TextInput onChangeText={(pass) => this.setState({ pass })} style={styles.input} underlineColorAndroid='black' secureTextEntry ></TextInput>*/}
                <TouchableHighlight style={{ alignItems: 'center', backgroundColor: 'lightgreen', marginLeft: 64, padding: 16, width: 256 }} underlayColor="limegreen" onPress={() => this.checkSubmit('otpConfirm')}>
                    <Text style={{ color: 'white', fontSize: 16 }}>Next</Text>
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
    },
    input: {
        marginLeft: 64,
        width: 256,

    }
});
