import React, { Component } from 'react';
import {View, Image,Text,TextInput,Button,TouchableOpacity} from 'react-native';
import { gray, blue } from 'color-name';

export default class Search extends Component {
    render() {
        return (
            <View style={{
                height:40,
                flexDirection:"row",
                justifyContent:"center",
                marginBottom:20,
                marginTop:20
            }}>
                <View style={{
                    flexDirection:"row",
                    alignItems:"center",
                    width:'80%',
                    marginRight:10,
                    backgroundColor:'#ccc',
                    borderRadius:20,
                    paddingLeft:20
                }}>
                    <Image style={{width:20,height:20}} source={require('../assets/客户公海.png')} />
                    <TextInput 
                        placeholder="搜索"
                        style={{
                            height:40,
                            width:'80%',
                            borderRadius:15
                        }}>
                    </TextInput>
                </View>
                {/* <View style={{height:34,width:34,borderRadius:17,overflow:"hidden"}}>
                    <Button title="+"/>
                </View> */}
                <TouchableOpacity style={{
                    width:40,
                    height:40,
                    backgroundColor:'#ccc',
                    alignItems:"center",
                    justifyContent:"center",
                    borderRadius:20
                }}>
                    <View>
                        <Text style={{color:'#000',fontSize:20}}>+</Text>
                    </View>
                </TouchableOpacity>
            </View>
        );
    }
}