import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, FlatList } from 'react-native';

import NameItem from './components/NameItem';
import NameInput from './components/NameInput';

export default function App() {
  const [listedNames, setListedNames] = useState([]);

  const addNameHandler = nameTitle => {
    setListedNames(currentNames => [
      ...currentNames,
      { id: Math.random().toString(), value: nameTitle }
    ]);
  };

  return (
    <View style={styles.screen}>
      <NameInput onAddName={addNameHandler} />
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
});
