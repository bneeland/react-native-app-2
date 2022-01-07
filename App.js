import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function App() {
  const [enteredName, setEnteredName] = useState('');
  const [listedNames, setListedNames] = useState([]);
  // function nameInputHandler(enteredText) {
  const nameInputHandler = (enteredText) => {
    setEnteredName(enteredText)
  };
  const addNameHandler = () => {
    setListedNames(currentNames => [...currentNames, enteredName]);
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
      <View>
        {listedNames.map((name) => <View key={name} style={styles.listItem}><Text>{name}</Text></View>)}
      </View>
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
  listItem: {
    padding: 10,
    marginTop: 10,
    backgroundColor: 'lightgrey',
    borderColor: 'black',
    borderWidth: 1
  }
});
