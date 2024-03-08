import { Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import { hp } from "@/utils/dimensions";

export default function Button({
  handlePress,
  text,
  disabled,
  color,
}: {
  handlePress: () => void;
  text?: string;
  disabled?: boolean;
  color?: string;
}) {
  const buttonColor = disabled ? "#DB3A0766" : color || "#DB3A07";
  const buttonOpacity = disabled ? 0.5 : 1;

  return (
    <TouchableOpacity
      style={[
        styles.buttonContainer,
        { backgroundColor: buttonColor, opacity: buttonOpacity },
      ]}
      onPress={disabled ? undefined : handlePress}
    >
      <Text style={styles.buttonText}>{text ? text : "Continue"}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    padding: hp(16),
    borderRadius: hp(8),
    marginTop: hp(35),
  },
  buttonText: {
    textAlign: "center",
    color: "#ffff",
  },
});
