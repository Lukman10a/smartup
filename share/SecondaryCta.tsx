import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { hp } from "@/utils/dimensions";

const SecondaryCta = ({
  handlePress,
  text,
}: {
  handlePress: () => void;
  text?: string;
}) => {
  return (
    <TouchableOpacity style={styles.buttonContainer} onPress={handlePress}>
      <Text style={styles.buttonText}>{text ? text : "Cancel"}</Text>
    </TouchableOpacity>
  );
};

export default SecondaryCta;

const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: "#DC35001A",
    // opacity: 0.1,
    padding: hp(16),
    borderRadius: hp(8),
  },
  buttonText: {
    textAlign: "center",
    color: "#DB3A07",
  },
});
