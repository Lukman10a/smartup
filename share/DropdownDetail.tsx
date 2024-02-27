import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

export default function DropdownDetail({
  handleSelected,
  selectedItem,
  options,
}: {
  handleSelected: (item: any) => void;
  selectedItem: null | string;
  options: string[];
}) {
  return (
    <View style={styles.dropDownDetailContainer}>
      <View>
        {options.map((option) => (
          <TouchableOpacity key={option} onPress={() => handleSelected(option)}>
            <Text
              style={
                selectedItem === option
                  ? styles.selectedDropDownDetailOption
                  : styles.dropDownDetailOption
              }
            >
              {option}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  dropDownDetailContainer: {
    position: "absolute",
    zIndex: 3,
    top: 50,
    width: "100%",
    // height: 200,
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
  },
  selectedDropDownDetailOption: {
    marginTop: 10,
    padding: 15,
    backgroundColor: "#DC35001A",
    color: "#DC3500",
    marginVertical: 4,
  },
});
