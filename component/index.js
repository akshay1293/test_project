import React from 'react';
import {
    Image,
    View
} from 'react-native';
import Loading from './loading';
import Login from './login/index';

export default class Index extends React.Component {
    constructor() {
        super();
        this.state = {
            loading: true
        }
    }
    render() {
        setTimeout(() => {
            this.setState({
                loading: false
            });
        }, 0);
        return (
            <View style={{flex: 1}}>
                {this.state.loading ? <Loading /> : <Login />}
            </View>
        );
    }
}
