import React from "react";
import { Text, TouchableOpacity, StyleSheet } from "react-native";

export default function Btn({ bgcolor, textColor, btnLabel, Press }) {
  return (
    <TouchableOpacity
      onPress={Press}
      style={[styles.button, { backgroundColor: bgcolor }]}
    >
      <Text style={[styles.text, { color: textColor }]}>
        {btnLabel}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    borderRadius: 100,
    alignItems: "center",
    height:45,
    width: 250,
    marginVertical: 10,
  },
  text: {
    fontSize: 25,
    fontWeight: "bold",
    paddingTop:3,
  },
});
