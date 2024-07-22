import React from 'react';
import { CheckBox } from 'react-native-web'; // Import CheckBox from react-native-web
import { View, Text, StyleSheet } from 'react-native';

const Checkbox = ({ label, onValueChange, checked }) => {
  return (
    <View style={styles.container}>
      <CheckBox
        value={checked}
        onValueChange={onValueChange}
        style={styles.checkbox}
      />
      <Text style={styles.label}>{label}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkbox: {
    marginRight: 8,
  },
  label: {
    fontSize: 16,
    paddingTop: 10,
  },
});

export default Checkbox;
