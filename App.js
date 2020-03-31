import React,{useState,useEffect} from 'react';
import {StyleSheet,View,Text, Image, 
	BackHandler,ToastAndroid,AsyncStorage
} from 'react-native';
import {Router, Overlay, Scene, Tabs, Drawer, Lightbox, Modal, Actions} from 'react-native-router-flux';
import { Icon } from '@ant-design/react-native';
import SplashScreen from 'react-native-splash-screen';
import Home from './src/home/Homes';
import Goods from './src/goods/Goods';
import Login from './src/common/Login'
import Userinfor from './src/userinfor/Userinfor';
import SwiperPage from './src/common/SwiperPage';
import home11 from './components/home11';
import classification1 from './components/classification1';
import myself1 from './components/myself1';
import shopcar1 from './components/shopcar1';
import fabu from './components/fabu';
import Registered from './src/common/Registered';


console.disableYellowBox = true;

const App = () => {
	let [isLogin,setLogin] = useState(false);
	let [isInstall,setInstall] = useState(true);
	let now = 0;
	useEffect(()=>{
		// AsyncStorage.clear();
		console.log(isLogin);
		console.log(isInstall);
		AsyncStorage.getItem('isInstall')
		.then(res=>{
			console.log(res)
			if(res){
				setInstall(false);
			}
		})
		AsyncStorage.getItem('user')
		.then(res=>{
			let user = JSON.parse(res)
			console.log(user);
			if(!user){
				SplashScreen.hide();
			}
			if(user&&user.function.token==4){
				setLogin(true);
				SplashScreen.hide();
			}
		})
	},[])
	let afterInstall = ()=>{
		setInstall(false);
	}
	if(isInstall){
		return <View style={{flex:1}}>
			<SwiperPage afterInstall={afterInstall}/>
		</View>
	}

	return (
		<Router
			backAndroidHandler={()=>{
				if(Actions.currentScene == 'home' || Actions.currentScene == 'login'){
					if(new Date().getTime()-now<2000){
						BackHandler.exitApp();
					}else{
						ToastAndroid.show('确定要退出吗',100);
						now = new Date().getTime();
						return true;
					}
				}else{
					Actions.pop();
					return true;
				}
			}}
		>
			<Overlay>
			<Modal key="modal" hideNavBar>
				<Lightbox key="lightbox">
						<Scene initial={isLogin} key="root">
							<Tabs 
								key='tabbar'
								hideNavBar
								activeTintColor="red"
								inactiveTintColor="gray"
								tabBarStyle={{backgroundColor:'#fff'}}
							>
								<Scene key='homePage'
									title='首页'
									icon={
										({focused})=><Icon 
											color={focused?'red':'gray'} 
											name="home"
										/>
									}
								>
									<Scene key='home'
										hideNavBar={true}
										component={home11}
									/>
								</Scene>
								<Scene key='goodsPage'
									title='商品分类'
									icon={
										({focused})=><Icon 
											color={focused?'red':'gray'} 
											name="file"
										/>
									}
									
								>
									<Scene key='classification1' hideNavBar={true} component={classification1}/>
								</Scene>
								<Scene 
									key='userPage'
									hideDrawerButton
									icon={({focused})=>
										<Icon 
											color={focused?'red':'gray'} 
											name='file'/>
										}
									title="用户中心"
								>
									<Scene key='myself1' hideNavBar={true} component={myself1}/>
								</Scene>
								
							</Tabs>
						</Scene>
				</Lightbox>
				<Scene key='fabu' component={fabu}/>
				<Scene initial={!isLogin} key="login" component={Login} />
				<Scene key='registered' component={Registered}/>
			</Modal>
			</Overlay>
		</Router>
	);
};

export default App;