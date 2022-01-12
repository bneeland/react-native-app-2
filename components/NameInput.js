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
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="Add" onPress={addNameHandler} />
          </View>
          <View style={styles.button}>
            <Button title="Cancel" color="grey" onPress={props.onCancel}/>
          </View>
        </View>
      </View>
    </Modal>
  )
};

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    width: '80%',
    borderColor: 'lightgrey',
    borderWidth: 1,
    padding: 10,
    marginBottom: 10,
  },
  buttonContainer: {
    flexDirection: 'column',
    width: '80%',
  },
  button: {
    marginBottom: 10,
  }
});

export default NameInput;
