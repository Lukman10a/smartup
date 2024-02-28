import { Installment } from "@/screen/FeeSelection";
import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

export default function Dropdown({
  handleSelected,
  selectedItem,
  options,
}: {
  handleSelected: (item: string, breakdown: string[]) => void;
  selectedItem: null | string;
  options: Installment[];
}) {
  return (
    <View style={styles.dropDownDetailContainer}>
      {options.map((option) => (
        <TouchableOpacity
          key={option.type}
          onPress={() => handleSelected(option.name, option.breakdown)}
        >
          <Text
            style={
              selectedItem === option.name
                ? styles.selectedDropDownDetailOption
                : styles.dropDownDetailOption
            }
          >
            {option.name}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  dropDownDetailContainer: {
    position: "absolute",
    zIndex: 3,
    top: 50,
    width: "100%",
    borderWidth: 1,
    borderColor: "red",
    marginVertical: 10,
    borderRadius: 10,
    shadowColor: "blue",
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    backgroundColor: "#ffff",
    elevation: 5,
  },
  dropDownDetailOption: {
    padding: 10,
    marginVertical: 7,
    color: "#646464",
  },
  selectedDropDownDetailOption: {
    marginTop: 10,
    padding: 15,
    backgroundColor: "#DC35001A",
    color: "#DC3500",
    marginVertical: 4,
  },
});
