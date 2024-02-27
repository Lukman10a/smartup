import { Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import { hp } from "@/utils/dimensions";

export default function Button({
  handlePress,
  text,
}: {
  handlePress: () => void;
  text?: string;
}) {
  return (
    <TouchableOpacity style={styles.buttonContainer} onPress={handlePress}>
      <Text style={styles.buttonText}>{text ? text : "Continue"}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: "#DB3A07",
    padding: hp(16),
    borderRadius: hp(8),
    marginTop: hp(35),
  },
  buttonText: {
    textAlign: "center",
    color: "#ffff",
  },
});
