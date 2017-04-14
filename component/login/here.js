import React from 'react';
import {
    Text,
    TextInput,
    TouchableHighlight,
    View,
    StyleSheet
} from 'react-native';

export default class Here extends React.Component {

    render() {

        return (

            <View style={styles.container}><Text>you are here!!</Text></View>
        );
    }
}

const styles = StyleSheet.create({

    container: {


        backgroundColor: 'red',
    }
})