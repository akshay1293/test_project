import React from 'react';
import {

    View,
    Navigator,
} from 'react-native';

import Login from './login/index';
import Here from './login/here';

export default class Nav extends React.Component {

    renderScene(route, navigator) {

        switch (route.id) {

            case 'login':
                return <Login route={route} navigator={navigator} hi='hello' />
            case 'next':
                <Here route={route} navigator={navigator} />
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