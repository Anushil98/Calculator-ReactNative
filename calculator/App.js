import * as React from 'react';
import { Text, View, PixelRatio,StyleSheet,TouchableOpacity } from 'react-native';
import Constants from 'expo-constants';
import { Dimensions } from 'react-native';
const screenWidth = Math.round(Dimensions.get('window').width);
const screenHeight = Math.round(Dimensions.get('window').height);
const styles = StyleSheet.create({
  buttongrid:{
    flexDirection: "row",
    flexWrap: "wrap"
  },
  button:{
    backgroundColor: "#DCDAE1",
    alignItems: "center",
    width: 0.20 * screenWidth,
    height: 0.15 * (screenHeight/2),
    marginLeft: 15,
    marginRight: 0,
    marginTop:20,
    borderColor:"#696969",
    borderWidth:2,
    justifyContent: 'center', 
  },clear:{
    width:0.438 * screenWidth
  },
  equalTo:{
    width:0.25 * screenWidth *2.746,
    marginRight: 0

  },
  text:{
    fontSize:25
  }
})

export default class App extends React.Component {
  constructor(){
    super()
    this.state = {
      result:"0"
    }
  }

  updateString(st){
    let last = this.state.result.substring(this.state.result.length-1,this.state.result.length)
    if((last=='+' || last=='-' || last=='*' || last=='/') && st==last){
      return
    }
    this.setState(prevState => ({
      result:prevState.result + st
    }))
  }
  clear(){
    this.setState(prevState=>({
      result: "0"
    }))
  }
  removeLast(){
    this.setState(prevState=>{
    let temp=prevState.result.substring(0,prevState.result.length-1)
    let last = temp.substring(temp.length-1,temp.length)
    if(last=="."){
      temp=temp.substring(0,temp.length-1)
    }
    if(temp==""){
      temp="0"
    }
    return({
      result: temp
    })})
  }
  calculate(){
    this.setState(prevState=>({
      result: eval(prevState.result).toString()
    }))
  }
  render()
  {
    return (
    <View style={{marginTop: Constants.statusBarHeight+ (screenHeight/3.5)}} >
      <Text style={{fontSize:48,alignSelf: 'flex-end'}}>{this.state.result}
      </Text>
      <View style={styles.buttongrid}>
      <TouchableOpacity style={[styles.button,styles.clear]} onPress={()=>this.clear()} ><Text style={styles.text}>CE</Text></TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={()=>this.removeLast()} ><Text style={styles.text}>C</Text></TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={()=>this.updateString('/')} ><Text style={styles.text}>/</Text></TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={()=>this.updateString(9)} ><Text style={styles.text}>9</Text></TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={()=>this.updateString(8)} ><Text style={styles.text}>8</Text></TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={()=>this.updateString(7)} ><Text style={styles.text}>7</Text></TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={()=>this.updateString('+')} ><Text style={styles.text}>+</Text></TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={()=>this.updateString(6)} ><Text style={styles.text}>6</Text></TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={()=>this.updateString(5)} ><Text style={styles.text}>5</Text></TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={()=>this.updateString(4)} ><Text style={styles.text}>4</Text></TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={()=>this.updateString('-')} ><Text style={styles.text}>-</Text></TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={()=>this.updateString(3)} ><Text style={styles.text}>3</Text></TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={()=>this.updateString(2)} ><Text style={styles.text}>2</Text></TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={()=>this.updateString(1)} ><Text style={styles.text}>1</Text></TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={()=>this.updateString('*')} ><Text style={styles.text}>x</Text></TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={()=>this.updateString(0)} ><Text style={styles.text}>0</Text></TouchableOpacity>
      <TouchableOpacity style={[styles.button,styles.equalTo]} onPress={()=>this.calculate() } ><Text style={styles.text}>=</Text></TouchableOpacity>
      </View>
    </View>
  );
  }
}

