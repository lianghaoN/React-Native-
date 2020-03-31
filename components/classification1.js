import React, { Component } from 'react'
import { StyleSheet,
    View,
    Text,
    TextInput,
    Image,
    Dimensions} from 'react-native';

const {width} = Dimensions.get('window')

export default class classification1 extends Component {
    render() {
        return (
            <View>
      <View style={{justifyContent:"center",width:'100%',alignItems:"center"}}>
        <View
          style={{
            width:"80%",
            alignItems:"center",
            flexDirection:"row",
            backgroundColor:'#eeeeee'
          }}
        >
          <TextInput
            placeholder="请输入商品名称"
            style={{
              height:40,
              width:"90%",
              borderRadius:5,
              backgroundColor:'#eeeeee',
            }}
          ></TextInput>
          <Image style={{}} source={require('../img/search.jpg')}/>
        </View>
        <View style={{flexDirection:"row",width:"100%",height:50}}>
          <View style={[styles.NavView]}><Text style={styles.NavText1}>综合</Text></View>
          <View style={styles.NavView}><Text style={styles.NavText}>销量</Text></View>
          <View style={styles.NavView}><Text style={styles.NavText}>新品</Text></View>
          <View style={styles.NavView}><Text style={styles.NavText}>价格</Text></View>
          <View style={styles.NavView}><Text style={styles.NavText}>信用</Text></View>
        </View>
      </View>
      <View style={{backgroundColor:'#f4f4f4',width:'100%'}}>
        <View style={{flexDirection:"row"}}>
          <View style={styles.ViewS}>
            <View style={{alignItems:"center",}}>
              <Image style={{width:100,height:130}} source={require('../img/chips_1.png')}/>
            </View>
            <Text style={styles.ViewsText1}>Oishi/上好佳玉米卷20包膨化休闲食品Oishi/上好佳</Text>
            <Text style={styles.ViewsText2}>36.00</Text>
          </View>
          <View style={styles.ViewS}>
            <View style={{alignItems:"center",}}>
                <Image style={{width:100,height:130}} source={require('../img/chips_2.png')}/>
              </View>
              <Text style={styles.ViewsText1}>Oishi/上好佳玉米卷20包膨化休闲食品Oishi/上好佳</Text>
              <Text style={styles.ViewsText2}>36.00</Text>
          </View>
        </View>
        <View style={{flexDirection:"row"}}>
          <View style={styles.ViewS}>
            <View style={{alignItems:"center",}}>
                <Image style={{width:100,height:130}} source={require('../img/chips_1.png')}/>
              </View>
              <Text style={styles.ViewsText1}>Oishi/上好佳玉米卷20包膨化休闲食品Oishi/上好佳</Text>
              <Text style={styles.ViewsText2}>36.00</Text>
          </View>
          <View style={styles.ViewS}>
            <View style={{alignItems:"center",}}>
                <Image style={{width:100,height:130}} source={require('../img/chips_2.png')}/>
              </View>
              <Text style={styles.ViewsText1}>Oishi/上好佳玉米卷20包膨化休闲食品Oishi/上好佳</Text>
              <Text style={styles.ViewsText2}>36.00</Text>
          </View>
        </View>
        <View style={{flexDirection:"row"}}>
          <View style={styles.ViewS}>
            <View style={{alignItems:"center",}}>
                <Image style={{width:100,height:130}} source={require('../img/chips_1.png')}/>
              </View>
              <Text style={styles.ViewsText1}>Oishi/上好佳玉米卷20包膨化休闲食品Oishi/上好佳</Text>
              <Text style={styles.ViewsText2}>36.00</Text>
          </View>
          <View style={styles.ViewS}>
            <View style={{alignItems:"center",}}>
                <Image style={{width:100,height:130}} source={require('../img/chips_2.png')}/>
              </View>
              <Text style={styles.ViewsText1}>Oishi/上好佳玉米卷20包膨化休闲食品Oishi/上好佳</Text>
              <Text style={styles.ViewsText2}>36.00</Text>
          </View>
        </View>
      </View>
    </View>
        );
    }
}
const styles = StyleSheet.create({
    NavView:{
      width:width*0.2,
      height:50,
      justifyContent:"center"
    },
    NavText:{
      color:"#9a9a9a",
      textAlign:"center"
    },
    NavText1:{
      color:"red",
      textAlign:"center"
    },
    ViewS:{
      margin:12,
      marginTop:5,
      marginBottom:8,
      width:width*0.45,
      height:220,
      backgroundColor:'#fff',
      paddingTop:10
    },
    ViewImg:{
      width:80,
      height:100,
    },
    ViewsText1:{
      marginTop:10,
      color:'#666666'
    },
    ViewsText2:{
      color:'red',
      marginTop:10
    }
  });