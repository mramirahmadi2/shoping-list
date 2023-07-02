import React, { useState } from "react";
import { FontAwesome } from '@expo/vector-icons';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from "react-native";
const AddItem = ({addItem}) => {
    const [text, setText] = useState('');
    const onChange = textValue => setText(textValue);
  
  return (
    <View>
    <TextInput
      placeholder="Add Item..."
      style={styles.input}
      onChangeText={onChange}
      value={text}
    />
    <TouchableOpacity
      style={styles.btn}
      onPress={() => {
        addItem(text);
        setText('');
      }}>
      <Text style={styles.btnText}>
        <FontAwesome name="plus" size={20} /> Add Item
      </Text>
    </TouchableOpacity>
  </View>
  );
};
const styles = StyleSheet.create({
    input: {
        height: 60,
        padding: 8,
        margin: 5,
      },
      btn: {
        backgroundColor: '#c2bad8',
        padding: 9,
        margin: 5,
      },
      btnText: {
        color: 'darkslateblue',
        fontSize: 20,
        textAlign: 'center',
      },
});
export default AddItem;
