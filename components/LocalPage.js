import React, { Component } from 'react';
import {View, Text, AsyncStorage,Button,ScrollView,StatusBar} from 'react-native';

export default class LocalPage extends Component {
    constructor(){
        super();
        this.state = {
            tis:[]
        }
    }
    storeData = async ()=>{
        await AsyncStorage.setItem('userName','helloworld',
        ()=>{console.log('store success')})
    }
    getData = async ()=>{
        await AsyncStorage.getItem('userName').then((res)=>console.log(res));
    }
    getTitle = () =>{
        fetch('https://cnodejs.org/api/v1/topics')
        .then(res=>res.json())
        .then(res=>{
            this.setState({
                tis:res.data
            })
        })
    }
    render() {
        return (
            <View>
                {/* 状态栏 */}
                <StatusBar backgroundColor='transparent' translucent={true} />
                <ScrollView>
                    <Button title="存储" onPress={this.storeData}/>
                    <Button title="获取" onPress={this.getData}/>
                    <Button title="title" onPress={this.getTitle} />
                    {
                        this.state.tis.map((item)=>(
                            <Text>{item.title}</Text>
                        ))
                    }
                </ScrollView>
            </View>
        );
    }
};