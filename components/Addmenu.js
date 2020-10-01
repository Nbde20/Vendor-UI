import React, { Component } from 'react';
import { Button, View, Text,TextInput,StyleSheet,TouchableOpacity,Platform,Alert} from 'react-native';
import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

export default class Addmenu extends Component {
  constructor(props) {
    super(props);
    
    this.AddMenuItem = this.AddMenuItem.bind(this);
    this.state = {
                 description: '',
                 name : '',
                 price: '',
                //  status: '',
                 wholeResult: '',
                };
   }
   onClickListener = (viewId) => {
    if(this.state.description || this.state.description != " "){
     if(this.state.name){
      if(this.state.price){
          this.AddMenuItem();
       }else{
      Alert.alert("Please Enter Description");
     }
     }else{
    Alert.alert("Please Enter Name of the Item");
    }
  }else{
Alert.alert("Please enter Price of Item");
}
}

AddMenuItem(){
  var that = this;
  // var url = that.state.baseUrl + 'register.php';
  //  console.log("url:"+url);
  fetch('https://limitless-crag-24152.herokuapp.com/Eatery/Dell%206%20Cafeteria/Breakfast',{
        method: 'POST',
        body: JSON.stringify({"description": this.state.description, "name": this.state.name,"price": this.state.price})
        })
        // .then(response => response.json())  // promise
        // .then(json => dispatch(receiveAppos(json)))
        .then(function (response) {
          return response.text();
        }).then(function (result) { 
          // console.log(result);
          if(!result.error){
           that.setState({ 
                          //  status: result.error,
                           wholeResult: result,
                        });
           Alert.alert(+that.state.wholeResult);
           console.log(that.state.wholeResult);
       }else{
        Alert.alert(result.error_msg);
        console.log(result);
  }
}).catch(function (error) {
  console.log("-------- error ------- "+error);
  alert("result:"+error)
});
}
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={styles.sectionTitle}>+AddItem</Text>
        <TextInput
        style = {styles.input}
        color="green"
        placeholder = "description"
        underlineColorAndroid='transparent'
        onChangeText={(description) => this.setState({description})}
      />
      <TextInput
        style = {styles.input}
        color="green"
        placeholder = "name"
        color="green"
       underlineColorAndroid='transparent'
       onChangeText={(name) => this.setState({name})}
      />
      <TextInput
        style = {styles.input}
        color="green"
        placeholder = "price"
        keyboardType="number-pad"
        underlineColorAndroid='transparent'
        onChangeText={(price) => this.setState({price})}
      />
      <View style={[{ width: "90%", margin: 10, backgroundColor: "red" }]} >
          <Button
          title="AddItem"
          color="green"
         // onPress={() =>{ this.onClickListener('sign_up'); this.props.navigation.navigate('Home')}}
          onPress={() => this.onClickListener('sign_up')}
          
          />
          </View>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container:{
    backgroundColor:Colors.grey,
  },
  sectionTitle: {
    fontSize: 32,
    fontWeight: '600',
    color: 'green',
    justifyContent:'center',
  },
  input : {
    width : "90%",
    backgroundColor : "white",
    padding:15,
    marginBottom:10,
    borderColor:"green",
    borderWidth: 2
  },
  row: {
    flexDirection: 'row',
    marginTop: 4,
  },
  label: {
    color: "black",
  },
  link: {
    fontWeight: 'bold',
    color: "green",
  },
  forgotPassword: {
    width: '100%',
    alignItems: 'flex-end',
    marginBottom: 24,
    color: "green",
  },
});