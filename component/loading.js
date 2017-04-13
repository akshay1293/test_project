import React from 'react';
import {
    Image,
    StyleSheet,
    Text
} from 'react-native';

export default class Loading extends React.Component {
    render() {
        return (
            <Image style={styles.background} source={require('../asset/coffee_bg.jpg')}>
                <Text style={styles.title}>Empty Coffee Cups</Text>
                <Text style={{color:'white', fontSize: 16}}>~ no coffee ~ no talkee ~</Text>
            </Image>
        );
    }
}

const styles = StyleSheet.create({
    background: {
        alignItems: 'center', 
        height: 600, 
        width: 400
    },
    title: {
        color: 'white',
        marginTop: 84,
        fontFamily: 'cursive_bold',
        fontSize: 64
    }
});
