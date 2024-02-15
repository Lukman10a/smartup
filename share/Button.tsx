import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";

export default function Button() {
  const handlePress = () => {
    console.log("pressed");
  };
  return (
    <TouchableOpacity style={styles.buttonContainer} onPress={handlePress}>
      <Text style={styles.buttonText}>Continue</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: "#DB3A07",
    padding: 16,
    borderRadius: 8,
    marginTop: 35,
  },
  buttonText: {
    textAlign: "center",
    color: "#ffff",
  },
});
