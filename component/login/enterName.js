import React from 'react';
import {
    Text,
    TextInput,
    View,
    StyleSheet,
    TouchableHighlight
} from 'react-native';

export default class EnterName extends React.Component {

    render() {

        return (

            <View style={styles.container}>
                <Text style={{ fontSize: 16, marginLeft: 48 }}>Enter Name</Text>
                <TextInput style={styles.inputName} maxLength={10}></TextInput>
                <TouchableHighlight style={{ alignItems: 'center', backgroundColor: 'lightgreen', marginLeft: 48, padding: 16, width: 256 }} underlayColor="limegreen">
                    <Text style={{ color: 'white', fontSize: 16 }}>Finish</Text>
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
    inputName: {
        marginLeft: 48,
        width: 256,
        fontSize: 17,

    }
})