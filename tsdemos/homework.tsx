import React, { Component } from 'react'
import { Text, View } from 'react-native'

// 接口
// 用于描述一个对象的取值规范，不实现具体的对象
// 可用于强制类型检查
interface Person1 { 
    name: string;
    age: number;
}
class Person{
    constructor(public config:Person1){}
}
let p1 : Person = new Person({
    name:'zhangsan',
    age:12
})

// 新接口可在继承原生接口的属性和方法
interface Animal {
    name:string;
    eat():any;
}
interface Cat extends Animal{
    tail:string;
    eat():any{
        console.log('吃小鱼干');
    };
}
interface Dog extends Animal{
    ear:string;
    eat():any{
        console.log('吃骨头');
    }
}
let cat1:Cat = {name:'dog',tail:'bbb',eat()};
let dog1:Dog = {name:'dog',ear:'aaa',eat()};


// 泛型
// 是指在定义函数、接口或类的时候，不预先指定具体的类型，而在使用的时候再指定类型的一种特性
// 声明一个类、函数或者接口的数据类型
class HelloNumber<T> {
	Ten:T;
	add:(x:T, y:T) => T;
}

var myHelloNumber = new HelloNumber<number> ();
myHelloNumber.Ten = 10;
myHelloNumber.add = function(x,y) {
	return x+y;
}
// 可以声明一个指定类型的数据
function Hello1<T>(arg:T):T {
	return arg;
}
let str1 = Hello1<string>('Joh');
// 或者是限定数据类型
function Hello2(arg:number):number {
	return arg;
}
let str2 = Hello2(123);
// 不加[]会报错，因为没有length属性
function Hello3<T>(num:T[]):T[] {
    console.log(num.length);
	return num;
}
var list:Array<string> = Hello3<string>(['1', '2', '3']);
for(var i = 0; i < list.length; i++) {
	console.log(list[i]);
}


// 装饰器
// 是一种特殊类型的声明，它能够被附加到类声明、方法、属性或参数上
// 获取数据或者发起请求以及替代类
function addUrl(url:string){
    return function(target:any){
        target.prototype.url = url;
        return class extends target{
            name:string = '123'
        }
    }
}
@addUrl("https://")
class HomeServer{
    url:any;
    getData(){
        console.log(this.url);
        console.log(this.name);;
    }
}
let home = new HomeServer();
home.getData()
// 替代类
function setStatusBar(color:string){
    return function(WrapComponent:any){
        return class extends Component{
            render(){
                return (
                    <>
                        <View 
                            style={{height:30,backgroundColor:color}}
                        >
                        </View>
                        <WrapComponent />
                    </>
                )
            }
        }
    }
}
// 方法装饰器可以修改属性以及添加属性替代类
// 两个装饰器组合使用
function log(target:any,methodName:string,des:PropertyDescriptor){
    var oldVal = des.value;
    des.value = function(){
        console.log(methodName+'被调用');
        return oldVal.apply(this,[...arguments]);
    }
}
function enumerable(value: boolean) {
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        target.name = 'liu';
        descriptor.enumerable = value;
    };
}
class Greeter {
    greeting: string;
    constructor(message: string) {
        this.greeting = message;
    }

    @enumerable(false)
    @log
    greet(msg:string) {
        return "Hello, " + this.greeting+msg;
    }
}				
console.log(new Greeter('world').greet('参数'));


@setStatusBar('red')
export default class homework extends Component {
    render() {
        return (
            <View>
                <Text>123</Text>
            </View>
        );
    }
}