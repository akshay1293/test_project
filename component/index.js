import React from 'react';
import {
    Image,
    StyleSheet,
    Text,
    View
} from 'react-native';

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
        }, 3000);
        return (
            <View style={styles.container}>
                {this.state.loading ? <Image style={styles.image} source={require('../asset/loading.png')} /> : <Text style={styles.hello}>Hello World</Text>}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        flex: 1,
        justifyContent: 'center'
    },
    image: {
        width: 400,
        height: 600
    },
    hello: {
        fontSize: 16
    }
});
