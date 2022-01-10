import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const NameItem = props => {
  return (
    <View style={styles.listItem}>
      <Text>{props.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  listItem: {
    padding: 10,
    marginTop: 10,
    backgroundColor: 'lightgrey',
    borderColor: 'black',
    borderWidth: 1
  },
})

export default NameItem;
