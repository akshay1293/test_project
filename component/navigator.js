import React from 'react';
import {

    View,
    Navigator,
} from 'react-native';

import Login from './login/index';
import OtpConfirm from './login/otpConfirm';
import EnterName from './login/enterName';

export default class Nav extends React.Component {

    renderScene(route, navigator) {

        switch (route.id) {

            case 'login':
                return <Login route={route} navigator={navigator} />
            case 'otpConfirm':
                return <OtpConfirm route={route} navigator={navigator} otp={route.otp} mail={route.mail} />
            case 'name':
                return <EnterName route={route} navigator={navigator} />
        }
    }


    render() {

        return (

            <Navigator
                initialRoute={{ id: 'login' }}
                renderScene={this.renderScene.bind(this)} />


        );
    }

}