import React, { Component } from 'react';
import {View, Text, Image, TextInput, AsyncStorage, TouchableOpacity,ToastAndroid} from 'react-native';
import { Icon } from '@ant-design/react-native';
import {myFetch} from '../utils';
import { Actions } from 'react-native-router-flux';

export default class Registered extends Component {
    constructor(){
        super();
        this.state={
            username:'',
            pwd:'',
            repwd:''
        }
    }
    userhandle = (text)=>{
        this.setState({username:text})
    }
    pwdhandle = (text)=>{
        this.setState({pwd:text})
    }
    repwdhandle = (text)=>{
        this.setState({repwd:text})
    }
    registered = () =>{
        if(this.state.username != '' && this.state.pwd != '' && this.state.repwd !=''){
          if(this.state.pwd != this.state.repwd){
            ToastAndroid.show("两次密码不一样", ToastAndroid.LONG);
          }else{
            myFetch.post('./registered',{
              username:this.state.username,
              pwd:this.state.pwd
            }).then(res=>{
              if(res.data.token === '1'){
                ToastAndroid.show("用户名已存在", ToastAndroid.LONG);
              }
              else if (res.data.token === '2'){
                ToastAndroid.show("账号错误", ToastAndroid.LONG);
              }
              else{
                AsyncStorage.setItem('user',JSON.stringify(res.data))
                  .then(()=>{
                    console.log(AsyncStorage.getItem('user'));
                    Actions.login();
                  })
              }
            })
          }
        }else{
          ToastAndroid.show("每一项都不能为空", ToastAndroid.LONG);
        }
      }
    render() {
        return (
            <View style={{flex: 1,justifyContent: 'center'}}>
        <View
          style={{ alignItems: 'center'}}>
          <View
            style={{
              width: '80%',
              marginRight: 10,
              borderBottomColor: '#ccc',
              borderBottomWidth: 1,
              flexDirection: 'row',
              alignItems: 'center',
              paddingLeft: 20,
            }}>
            <Icon name="user" color="red"/>
            <TextInput placeholder="用户名" 
                onChangeText={this.userhandle}
            />
          </View>
          <View
            style={{
              width: '80%',
              marginRight: 10,
              borderBottomColor: '#ccc',
              borderBottomWidth: 1,
              flexDirection: 'row',
              alignItems: 'center',
              paddingLeft: 20,
            }}>
            <Icon name="user" color="red"/>
            <TextInput 
                onChangeText={this.pwdhandle}
                placeholder="密码" 
                secureTextEntry={true}
            />
          </View>
          <View
            style={{
              width: '80%',
              marginRight: 10,
              borderBottomColor: '#ccc',
              borderBottomWidth: 1,
              flexDirection: 'row',
              alignItems: 'center',
              paddingLeft: 20,
            }}>
            <Icon name="user" color="red"/>
            <TextInput 
                onChangeText={this.repwdhandle}
                placeholder="再次输入密码" 
                secureTextEntry={true}
            />
          </View>
            <TouchableOpacity 
                style={{
                    width: '80%',
                    height: 40,
                    backgroundColor: '#ccc',
                    marginTop: 30,
                    alignItems: 'center',
                    justifyContent: 'center'
                }}
                onPress={this.registered}>
                <Text>注册</Text>
            </TouchableOpacity>
        </View>
      </View>
        );
    }
}