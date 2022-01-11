import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Modal} from 'react-native';

const NameInput = props => {
  const [enteredName, setEnteredName] = useState('');

  const nameInputHandler = (enteredText) => {
    setEnteredName(enteredText)
  };

  const addNameHandler = () => {
    props.onAddName(enteredName);
    setEnteredName('');
  };

  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Enter name..."
          style={styles.input}
          onChangeText={nameInputHandler}
          value={enteredName}
        />
        <Button title="Cancel" color="red" />
        <Button title="Add" onPress={addNameHandler} />
      </View>
    </Modal>
  )
};

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  input: {
    width: '80%',
    borderColor: 'black',
    borderWidth: 1,
    padding: 10,
    marginBottom: 10
  },
});

export default NameInput;
