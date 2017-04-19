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

            <View>
                <Text>you are here!!</Text>
                {console.log("you are here!!")}
            </View>

        );
    }
}

const styles = StyleSheet.create({

    container: {


        backgroundColor: 'red',
    }
})