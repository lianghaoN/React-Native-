import React, {Component} from 'react';
import {View, Text, Button} from 'react-native';

// const Counter = () =>{
//   let [num,setNum] = useState(0);
//   return (
//     <View>
//       <Text>{num}</Text>
//       <Button title='+1' onPress={setNum(num+1)}/>
//     </View>
//   )
// }
// export default Counter;

export default class Counter extends Component {
  constructor() {
    super();
    this.state = {
      num: 0,
    };
  }
  add = () => {
    this.setState(state => {
      return {
        num: ++state.num,
      };
    });
  };

  render() {
    return (
      <View>
        <Text>{this.state.num}</Text>
        <Button onPress={this.add} title="+1" />
      </View>
    );
  }
}
