import React from 'react';
import { View, Text, StyleSheet, TouchableNativeFeedback } from 'react-native';

const NameItem = props => {
  return (
    <TouchableNativeFeedback activeOpacity={0.5} onPress={props.onDelete.bind(this, props.id)}>
      <View style={styles.listItem}>
        <Text>{props.title}</Text>
      </View>
    </TouchableNativeFeedback>
  );
};

const styles = StyleSheet.create({
  listItem: {
    padding: 10,
    marginTop: 10,
    backgroundColor: 'white',
    borderColor: 'lightgrey',
    borderWidth: 1,
  },
})

export default NameItem;
