import React from 'react';
import {
    Text,
    TextInput,
    TouchableHighlight,
    View
} from 'react-native';

export default class Login extends React.Component {
    constructor(){
        super();
        this.state = {
            mail: '',
            pass: ''
        };
    }
    render() {
        return (
            <View style={{backgroundColor:'white', flex:1, justifyContent:'center'}}>
                <Text style={{fontSize:48, fontFamily: 'cursive_bold', marginLeft:32, marginBottom:32}}>Sign in</Text>
                <Text style={{fontSize:16, marginLeft:48}}>Email address</Text>
                <TextInput onChangeText={(mail) => this.setState({mail})} style={{marginLeft:64, width:256}} ></TextInput>
                <Text style={{fontSize:16, marginLeft:48}}>Password</Text>
                <TextInput onChangeText={(pass) => this.setState({pass})} style={{marginLeft:64, width:256}} ></TextInput>
                <TouchableHighlight style={{alignItems:'center', backgroundColor:'lightgreen', marginLeft:64, padding:16, width:256}} underlayColor="limegreen" onPress={this.checkSubmit.bind(this)}>
                    <Text style={{color:'white', fontSize:16}}>Submit</Text>
                </TouchableHighlight>
            </View>
        );
    }
    checkSubmit() {
        console.log(this.state.mail + " " + this.state.pass);
    }
}