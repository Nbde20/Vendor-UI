import React, { useState, Component} from 'react';
import { StyleSheet, View, TextInput, Button } from 'react-native';

export default function AddItem({ submitHandler }) {
  [text, setText] = useState('');
  [price,setPrice]=useState('');
  const changeHandler = (val,price) => {
    setText(val);
    setPrice(price);
  };

  return (
    <View>
      <TextInput 
        style={styles.input} 
        placeholder='new menu item...'
        onChangeText={changeHandler} 
        value={text} 
      />
      <TextInput 
        style={styles.input} 
        placeholder='new price...'
        onChangeText={changeHandler} 
        value={price} 
      />
      <Button color='green' onPress={() => submitHandler(text)} title='Add New Item'/>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    marginBottom: 10,
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
});
