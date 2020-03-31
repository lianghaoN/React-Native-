import React,{Component } from 'react';
import {AsyncStorage,View, Text, StyleSheet,Image, Dimensions, FlatList,TouchableOpacity} from 'react-native';
import { Icon } from '@ant-design/react-native';
import ImagePicker from 'react-native-image-picker';
import { Actions } from 'react-native-router-flux';

const {width} = Dimensions.get('window');
const options = {
    title: '改头像',
    storageOptions: {
      skipBackup: true,
      path: 'images',
    },
};

export default class myself1 extends Component {
    constructor(){
        super();
        this.state={
            data1:["账户管理","收货地址","我的信息","我的订单","我的二维码","我的积分","我的收藏"],
            data2:["居家维修保养","出行接送","我的受赠人","我的住宿优惠","我的活动","我的发布"],
            avatarSource:require('../assets/touxiang_03.jpg'),
        }
    }
    componentDidMount=async()=>{
        (await AsyncStorage.getItem('urlImg') === null) ?
        this.setState({avatarSource:require('../assets/touxiang_03.jpg')}):
        this.setState({avatarSource:JSON.parse(await AsyncStorage.getItem('urlImg'))});
    }
    takePhotos = async()=>{
        await ImagePicker.showImagePicker(options,async (response)=>{
            if (response.didCancel) {
                return;
            } else if (response.error) {
                console.log('Error:', response.error);
            } else if (response.customButton) {
                console.log('custom:', response.customButton);
            } else {
                const source = { uri: response.uri };
                await AsyncStorage.setItem('urlImg',JSON.stringify(source));
                this.setState({
                    avatarSource: source
                });
            }
        })
        // AsyncStorage.clear();
    }
    clearLogin = ()=>{
        AsyncStorage.removeItem('user')
        Actions.login();
        console.log('clear');
    }
    render() {
        return (
            <View>
                <View style={styles.navView}>
                    <TouchableOpacity
                        onPress={()=>this.takePhotos()}
                    >
                        <Image style={{height:130,width:130}} source={this.state.avatarSource} />
                    </TouchableOpacity>
                    <Text style={{color:"#fff",fontSize:20}}>BINNU DHILLON</Text>
                </View>
                <View>
                    <View style={styles.view1}>
                        <Image style={styles.img1} source={require('../assets/icon_07.jpg')} />
                        <Text style={styles.text1}>我的个人中心</Text>
                    </View>
                    <View style={{flexDirection:"row",backgroundColor:"#fff",marginTop:1,paddingBottom:10}}>
                        <FlatList
                            numColumns={3}
                            data={this.state.data1}
                            renderItem={
                                ({item})=><View style={styles.flatlistview}>
                                    <Icon name="home"/>
                                    <Text style={styles.flatlisttext}>{item}</Text>
                                </View>
                            }
                        ></FlatList>
                    </View>
                </View>
                <View style={{marginTop:10}}>
                    <View style={styles.view1}>
                        <Image style={styles.img1} source={require('../assets/icon_07.jpg')} />
                        <Text style={styles.text1}>E族生活</Text>
                    </View>
                    <View style={{flexDirection:"row",backgroundColor:"#fff",marginTop:1,paddingBottom:10}}>
                        <FlatList
                            numColumns={3}
                            data={this.state.data2}
                            renderItem={
                                ({item})=>{
                                    if(item==="我的发布"){
                                        console.log(1)
                                        return(
                                            <View style={styles.flatlistview}>
                                                <Icon name="home"/>
                                                <Text style={styles.flatlisttext}>{item}</Text>
                                            </View>
                                        )
                                    }else{
                                        return(
                                            <View style={styles.flatlistview}>
                                                <Icon name="home"/>
                                                <Text style={styles.flatlisttext}>{item}</Text>
                                            </View>
                                        )
                                    }
                                }
                            }
                        ></FlatList>
                    </View>
                </View>
                {/* <View style={{alignItems:"center"}}>
                    <Text style={styles.text2}>BINNU DHILLLON | 退出</Text>
                </View> */}
                <View style={{alignItems:"center",width:width}}>
                    <TouchableOpacity
                        onPress={()=>this.clearLogin()}
                        style={styles.btn1}
                    >
                        <Text>退出登录</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    navView:{
        backgroundColor:"#f23030",
        width:width,
        height:230,
        alignItems:"center",
        justifyContent:"center",
    },
    view1:{
        backgroundColor:"#fff",
        paddingTop:20,
        flexDirection:"row"
    },
    img1:{
        position:"absolute",
        top:15,
        left:20,
        height:25,
        width:25
    },
    text1:{
        marginLeft:70,
        paddingBottom:10,
        color:"#8a8989"
    },
    flatlistview:{
        width:width/3,
        height:70,
        justifyContent:"center",
        alignItems:"center",
        paddingTop:20
    },
    flatlisttext:{
        color:"#727171",
        marginTop:10,
        fontSize:15
    },
    text2:{
        color:"#a7a7a7",
        marginTop:20,
        justifyContent:"center"
    },
    btn1:{
        backgroundColor:"red",
        width:width*0.8,
        height:34,
        borderRadius:17,
        marginTop:20,
        color:'#fff',
        paddingTop:7,
        alignItems:"center"
    }
})