import React from 'react';
import { TextInput, StyleSheet } from 'react-native';
import { black } from './Constants';

const Field = (props) => {
  return (
    <TextInput
      {...props}
      style={[styles.input, { color: black }]}
      placeholderTextColor="grey"
    />
  );
};

const styles = StyleSheet.create({
  input: {
    borderRadius: 100,
    paddingHorizontal: 10,
    width: '80%',
    backgroundColor: 'rgb(220,220,220)',
    marginVertical: 10,
    height: 45,
  },
});

export default Field;
