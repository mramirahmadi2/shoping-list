import React, { useState } from "react";
import { View,  StyleSheet, FlatList, Alert } from "react-native";
import { v4 as uuid } from "uuid";
import Header from "./components/header";
import ListItem from "./components/LIstItem";
import AddItem from "./components/AddItem";

const App = () => {
  const [items, setItems] = useState([
    { id: uuid(), text: "Milk" },
    { id: uuid(), text: "Eggs" },
    { id: uuid(), text: "Bread" },
    { id: uuid(), text: "Juice" },
  ]);
  const deleteItem = (id)=>{
    setItems(prevItems =>{
     return prevItems.filter((item)=> item.id != id)
    })
  }
  const addItem = (text)=>{
    if(!text){
      Alert.alert(
        'No item entered',
        'Please enter an item when adding to your shopping list',
        [
          {
            text: 'Understood',
            style: 'cancel',
          },
        ],
        {cancelable: true},
      );
    }else{
      setItems(prevItems =>{
        return [{id:uuid(),  text: text}, ...prevItems]
       })
    }
   
  }
  return (
    <View style={styles.container}>
      <Header title="Shoping List" />
      <AddItem addItem={addItem} />
      <FlatList
        data={items}
        renderItem={({ item }) => <ListItem item={item} deleteItem={deleteItem} />}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
  },
});
export default App;
