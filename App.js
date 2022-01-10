import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, FlatList } from 'react-native';

import NameItem from './components/NameItem'

export default function App() {
  const [enteredName, setEnteredName] = useState('');
  const [listedNames, setListedNames] = useState([]);
  // function nameInputHandler(enteredText) {
  const nameInputHandler = (enteredText) => {
    setEnteredName(enteredText)
  };
  const addNameHandler = () => {
    setListedNames(currentNames => [...currentNames, { id: Math.random().toString(), value: enteredName }]);
  };
  return (
    <View style={styles.screen}>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Enter name..."
          style={styles.input}
          onChangeText={nameInputHandler}
          value={enteredName}
        />
        <Button title="Add" onPress={addNameHandler} />
      </View>
      <FlatList
        keyExtractor={(item, index) => item.id}
        data={listedNames}
        renderItem={itemData => <NameItem title={itemData.item.value} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  input: {
    width: '80%',
    borderColor: 'black',
    borderWidth: 1,
    padding: 10
  },
  list: {
    marginBottom: 10
  }
});
