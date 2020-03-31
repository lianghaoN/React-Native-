import React, { Component } from 'react';
import {View, Text ,Button} from 'react-native';
import {Actions} from 'react-native-router-flux'
import { setState } from 'expect/build/jestMatchersObject';

export default class Msg extends Component {
    constructor(){
        super();
        this.state={
            count:0
        }
    }
    render() {
        return (
            <View>
                <Button title="跳转DOC" onPress={()=>Actions.msgdetail({id:100})} />
                <Button title="消息数加一" onPress={()=>this.setState({count:1})} />
                {/* <Text>消息数：{this.state.count}</Text>
             */}
                <Button title="跳转light" onPress={()=>Actions.light()} />
                <Button title="登陆" onPress={()=>Actions.login()} />
                <Button 
                    title='Login1' 
                    onPress={()=>Actions.login1()}
                />
                <Button 
                    title='跳到文档页' 
                    onPress={()=>Actions.doc()}
                />
            </View>
        );
    }
};