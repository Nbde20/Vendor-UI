import React,{Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button,
  Alert,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import Drop from './dropmenu';
import List from './List';

// const [selected, setSelected]=null

// const Home extends Component = () => {
class Home extends Component  {
  constructor(props) {
    super(props);
    this.state = {
      selectedvalue: "4",
    };
  }
  setselectvalue = (value) => {
    console.log("value from Home.js "+this.state.selectedvalue );
    this.setState({ selectedvalue: value })
}
componentDidUpdate = ( ) => {
  console.log("value from Home.js "+this.state.selectedvalue );
}
componentDidMount = ( ) => {
  console.log("value from Home.js "+this.state.selectedvalue );
}

Gotomenu= () =>{
  console.log("Helo")
 this.props.navigation.navigate('Addmenu')

}
  render(){
    
  return (
    <ScrollView>
    <View style={styles.sectionContainer} >
      <Text style={styles.sectionTitle}>Welcome, Vendor!</Text>
      <Text style ={styles.sectionsubTitle}>Venue:-Dell INC 6</Text>
      <View style={styles.body}>
      <Drop menu={this.Gotomenu}
            />
      </View>
      </View>
      </ScrollView>
  );
  }
};

const styles = StyleSheet.create({
  container:{
    backgroundColor:Colors.grey,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    marginTop:5,
    padding:7,
  },
  bodybutton: {
    marginTop:20,
    padding:40,
    color:'green',
  },
  sectionContainer: {
    marginTop: 40,
    paddingHorizontal: 5,
  },
  sectionTitle: {
    fontSize: 32,
    fontWeight: '600',
    color: 'green',
    justifyContent:'center',
     paddingHorizontal:10,
  },
  sectionsubTitle: {
    fontSize: 22,
    fontWeight: '500',
    color: Colors.black,
    justifyContent:'center',
    paddingHorizontal:15,
  },
  buttonContainer:{
    flexDirection:'column',
    paddingTop:10,
    color:'green',

  },
  sectionDescription: {
    marginTop: 5,
    fontSize: 18,
    fontWeight: '400',
    
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default Home;
