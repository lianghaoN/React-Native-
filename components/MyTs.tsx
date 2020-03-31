import React, { Component } from 'react'
import { View, Text, StyleSheet, Button,Animated} from 'react-native';

let num:number =  100;

export default class MyTs extends Component {
    render() {
        return (
            <View>
                <Text>text{num}</Text>
            </View>
        );
    }
}