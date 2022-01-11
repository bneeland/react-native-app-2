import React, { useState } from 'react';
import { StyleSheet, View, Button, FlatList } from 'react-native';

import NameItem from './components/NameItem';
import NameInput from './components/NameInput';

export default function App() {
  const [listedNames, setListedNames] = useState([]);
  const [isAddMode, setIsAddMode] = useState(false);

  const addNameHandler = nameTitle => {
    setListedNames(currentNames => [
      ...currentNames,
      { id: Math.random().toString(), value: nameTitle }
    ]);
  };

  const removeNameHandler = nameId => {
    setListedNames(currentNames => {
      return currentNames.filter((name) => name.id !== nameId);
    });
  }

  return (
    <View style={styles.screen}>
    <Button title="Add name" onPress={() => setIsAddMode(true)} />
      <NameInput visible={isAddMode} onAddName={addNameHandler} />
      <FlatList
        keyExtractor={(item, index) => item.id}
        data={listedNames}
        renderItem={itemData => (
          <NameItem
            id={itemData.item.id}
            onDelete={removeNameHandler}
            title={itemData.item.value}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50
  },
});
