import React, { Component } from 'react';
import {ToastAndroid,Dimensions,StyleSheet, View, Text ,DrawerLayoutAndroid,TouchableHighlight, TouchableOpacity, TextInput, FlatList} from 'react-native';
import { Icon } from '@ant-design/react-native';
import { Actions } from 'react-native-router-flux';

const {width} = Dimensions.get('window');
const limit = 10;
export default class fabu extends Component {
    constructor(){
        super();
        this.state={
            titles:[],
            page:1
        }
    }
    componentDidMount(){
        fetch('https://cnodejs.org/api/v1/topics?page='+this.state.page+'&&limit='+limit)
        .then(res=>res.json())
        .then(res=>{
            this.setState({
                titles:res.data
            })
        })
    }
    componentDidUpdate(preProp,preState){
        if(this.state.page != preState.page){
            fetch('https://cnodejs.org/api/v1/topics?page='+this.state.page+'&&limit='+limit)
            .then(res=>res.json())
            .then(res=>{
                this.setState({
                    titles:res.data
                })
            })
        }
    }
    back=()=>{
        if(this.state.page == 1){
            ToastAndroid.show("此页为第一页，不可前翻", ToastAndroid.LONG);
        }else{
            var page = this.state.page;
            this.setState({
                page:--page
            })
        }
    }
    front=()=>{
        var page = this.state.page;
        this.setState({
            page:++page
        })
    }
    openDrawer(){		
		this.refs.drawerLayout.openDrawer()
	}
	render(){
		let navigationView = (
			<View style={{flex:1}}>
				<Text>123</Text>
			</View>
		);
		return(
            <View>
                <View style={styles.navView1}>
                    <View style={{flexDirection:"row",alignItems:"center",marginRight:width*0.32}}>
                        <TouchableOpacity
                        style={{alignItems:"center",marginLeft:width*0.01}}
                        onPress={()=>{Actions.pop()}}>
                            <Icon name="left"/>
                        </TouchableOpacity>
                        <Text style={{marginLeft:width*0.37,color:"#fff",fontSize:15}}>我的发布</Text>
                    </View>
                    <DrawerLayoutAndroid
                        ref={'drawerLayout'}
                        drawerLockMode='unlocked'
                        drawerWidth={230} 		
                        drawerPosition="right"	     
                        renderNavigationView={() => navigationView}  			
                    >
                    <View style={{flex: 1,paddingTop:5}}>
                        <TouchableHighlight
                            onPress={()=>this.openDrawer()}
                            style={{padding:10,backgroundColor:'red'}}
                        >
                            <Icon name="ellipsis"/>
                        </TouchableHighlight>				
                    </View>
                    </DrawerLayoutAndroid>
                </View>
                <FlatList 
                    data={this.state.titles}
                    renderItem={
                        ({item})=>
                            <View style={{flexDirection:"row",alignItems:"center",height:40}}>
                                <View style={{width:width*0.65}}>
                                    <Text style={{fontSize:15}}>
                                        {item.title ? (item.title.length>15 ? item.title.substr(0,15)+"...":item.title):""}
                                    </Text>
                                </View>
                                <Text style={{fontSize:15}}>{item.create_at.substr(0,10)}</Text>
                                {(item.create_at.substr(9,1)%2===0) ? (<Text>已回复</Text>):(<Text style={{color:'red'}}>待回复</Text>)}
                            </View>
                    }
                />
                <View style={{flexDirection:"row",width:'100%',justifyContent:"center",alignItems:"center"}}>
                    <TouchableOpacity 
                        style={styles.footTouch}
                        onPress={()=>this.back()}
                    >
                        <Text>上一页</Text>
                    </TouchableOpacity>
                    <Text style={{justifyContent:"center",marginLeft:width*0.2,marginRight:width*0.23}}>第{this.state.page}页</Text>
                    <TouchableOpacity 
                        onPress={()=>this.front()}
                        style={styles.footTouch}
                    >
                        <Text>下一页</Text>
                    </TouchableOpacity>
                </View>
            </View>
		);
	}
}
const styles = StyleSheet.create({
    navView1:{
        width:'100%',
        height:50,
        backgroundColor:'red',
        flexDirection:"row",
    },
    footTouch:{
        backgroundColor:'red',
        color:'#fff',
        height:30,
        width:width*0.15,
        borderRadius:15,
        fontSize:10,
        padding:3,
        alignItems:"center"
    }
})