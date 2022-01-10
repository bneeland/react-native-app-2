import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet} from 'react-native';

const NameInput = props => {
  const [enteredName, setEnteredName] = useState('');

  const nameInputHandler = (enteredText) => {
    setEnteredName(enteredText)
  };

  return (
    <View style={styles.inputContainer}>
      <TextInput
        placeholder="Enter name..."
        style={styles.input}
        onChangeText={nameInputHandler}
        value={enteredName}
      />
      <Button title="Add" onPress={props.onAddName.bind(this, enteredName)} />
    </View>
  )
};

const styles = StyleSheet.create({
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
});

export default NameInput;
