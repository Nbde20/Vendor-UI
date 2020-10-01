import React, { Component } from 'react';
import { Button, View, Text,TextInput,StyleSheet,TouchableOpacity } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';


export default class ForgotPasswordScreen extends Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        {/* <Text>Home Screen</Text> */}
        <Text style={styles.sectionTitle}>Reset Password</Text>
        <TextInput
        style = {styles.input}
        label="Username"
        color="green"
        placeholder = "Email Address"
      />
          <Button
          title="Done"
          color="green"
          onPress={() => this.props.navigation.navigate('LoginScreen')}
          
          />
      <View style={styles.row}>
        <Text style={styles.label}>Reset details sent to email </Text>
        <TouchableOpacity onPress={() =>this.props. navigation.navigate('LoginScreen')}>
          <Text style={styles.link}>Login</Text>
        </TouchableOpacity>
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