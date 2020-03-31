import React, { Component } from 'react'
import { View, Text, StyleSheet,TextInput,Image, Dimensions,TouchableOpacity} from 'react-native';
import { Icon, Carousel } from '@ant-design/react-native';
import { Actions } from 'react-native-router-flux';
// import Button from 'react-native-button';
const {width} = Dimensions.get('window');

export default class home11 extends Component {
    render() {
        return (
            <View>
                <View style={styles.NavView1}>
                    <Icon name='search' style={{position:'absolute',top:8,left:70,fontSize:25}}/>
                    <TextInput
                        placeholder="请输入您要搜索的关键字"
                        placeholderTextColor="#fff"
                        style={{
                            paddingLeft:40,
                            backgroundColor:"#fbb8b8",
                            height:34,
                            width:"70%",
                            borderRadius:17,
                            opacity:0.7
                        }}
                    ></TextInput>
                    <Icon name="shop" style={{marginLeft:10,fontSize:25}}/>
                </View>
                <Carousel
                    autoplay={true}
                    infinite
                >
                    <Image style={styles.carouselImg} source={require('../assets/banner1_02.jpg')}/>
                    <Image style={styles.carouselImg} source={require('../assets/banner2_02.jpg')}/>
                    <Image style={styles.carouselImg} source={require('../assets/banner1_02.jpg')}/>
                </Carousel>
                <View style={styles.View1}>
                    <Image style={styles.View1Img} source={require('../assets/service_00.jpg')} />
                    <Text style={styles.View1Text}>居家维修保养</Text>
                    <Image style={styles.View1Img2} source={require('../assets/right_03.jpg')} />
                </View>
                <View style={styles.View1}>
                    <Image style={styles.View1Img} source={require('../assets/service_01.jpg')} />
                    <Text style={styles.View1Text}>住宿优惠</Text>
                    <Image style={styles.View1Img2} source={require('../assets/right_03.jpg')} />
                </View>
                <View style={styles.View1}>
                    <Image style={styles.View1Img} source={require('../assets/service_02.jpg')} />
                    <Text style={styles.View1Text}>出行接送</Text>
                    <Image style={styles.View1Img2} source={require('../assets/right_03.jpg')} />
                </View>
                <View style={styles.View1}>
                    <Image style={styles.View1Img} source={require('../assets/service_03.jpg')} />
                    <Text style={styles.View1Text}>E族优惠</Text>
                    <Image style={styles.View1Img2} source={require('../assets/right_03.jpg')} />
                </View>
                <View style={{alignItems:"center",width:width}}>
                    <TouchableOpacity
                        onPress={()=>Actions.fabu()}
                        style={styles.btn1}
                    >
                        <Text>发布需求</Text>
                    </TouchableOpacity>
                </View>
                <View style={{alignItems:"center"}}>
                    <Text style={styles.text1}>@E族之家 版权所有</Text>
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    NavView1:{
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"center",
        backgroundColor:'#f23030',
        width:'100%',
        height:45
    },
    carouselImg:{
        width:'100%',
    },
    View1:{
        alignItems:"center",
        flexDirection:"row",
        width:"100%",
        height:80,
        backgroundColor:"#fff",
        marginTop:10
    },
    View1Img:{
        width:60,
        height:60,
        marginLeft:20,
        marginRight:40
    },
    View1Text:{
        fontSize:20,
        color:"#494949"
    },
    View1Img2:{
        position:"absolute",
        right:20
    },
    btn1:{
        backgroundColor:"red",
        width:width*0.8,
        height:40,
        borderRadius:20,
        marginTop:20,
        color:'#fff',
        paddingTop:7,
        alignItems:"center"
    },
    text1:{
        color:"#a7a7a7",
        marginTop:10,
        justifyContent:"center"
    }
})