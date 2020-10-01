import React,{Component,useState} from "react";
import { View, Picker, StyleSheet, Text , Button, Alert} from "react-native";
import List from './List';
import DeprecatedViewPropTypes from "react-native/Libraries/DeprecatedPropTypes/DeprecatedViewPropTypes";
class Drop extends Component  {
//const Drop = () => {
   // const [selectedValue, setSelectedValue] = useState(" ");
     state = {
      pickerValues:[], 
      Value:""
    }
     GetMenuTypes = () => {
      fetch('https://limitless-crag-24152.herokuapp.com/Eatery/Dell%206%20Cafeteria')
      .then(response => response.json())
      .then(json => {
      console.log(json)
      this.setState({
      pickerValues:json
      })
      })
      }
      componentDidMount() {
        this.GetMenuTypes()
        }
  render(){
    //const [selectedValue, setSelectedValue] = useState(" ");
    let myMenu = this.state.pickerValues.map((Value,myIndex)=>{
      console.log('myValue: ' + Value)
      return(
        <Picker.Item label={Value} value={Value} key={myIndex}/>
        )
      })
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Choose a meal:-</Text> 
      <Picker
         selectedValue = {this.state.Value}
        //selectedValue= {this.state.selectedValue}
        style={{ height: 50, width: 250 }}
        //onValueChange= {this.props.parentcallback}
        onValueChange={e => { this.setState({Value:e}); this.props.parentcallback(e)}}
      
       >
        {/* <Picker Value={this.state.Value} onValueChange={(value)=>this.setState({Value:value})} >
         {myMenu}
        </Picker> */}
        <Picker.Item label="Choose one menu" value="4" />
        {/* <Picker.Item label="Breakfast" value="breakfast" />
        <Picker.Item label="Lunch" value="lunch" />
        <Picker.Item label="Dinner" value="dinner" />
        <Picker.Item label="Specials" value="specials" /> */}
        {myMenu}
      </Picker>
      <View style={styles.body}>
           <List listname = {this.state.Value}  menunav={this.props.menu}
           />
      </View>
    </View>
  );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    //alignItems: "center"
  },
  text:{
    fontSize: 20,
    fontWeight: '400',
    color: 'black',
  },
  buttonContainer:{
      flexDirection:'column',
      paddingTop: 5,
      color: 'green',


  },
});

export default Drop;