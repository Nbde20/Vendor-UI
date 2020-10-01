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

export default class AppNewItem extends Component {
    render() {
      return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          {/* <Text>Home Screen</Text> */}
          <Text style={styles.sectionTitle}>Add Item</Text>
          <TextInput
          style = {styles.input}
          label="Name"
          color="green"
          placeholder = "Name"
        />
        <TextInput
          style = {styles.input}
          label="Price"
          color="green"
          placeholder = "Price"
          color="green"
        />
        <TextInput
          style = {styles.input}
          label="Description"
          color="green"
          placeholder = "Description"
          color="green"
        />
        <View style={[{ width: "90%", margin: 10, backgroundColor: "red" }]} >
            <Button
            title="+Add Item"
            color="green"
            onPress={() => this.props.navigation.navigate('Home')}
            
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