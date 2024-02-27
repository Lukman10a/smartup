import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const CustomDropdown = ({ data, onSelect, defaultValue }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState(defaultValue);

  const toggleOpen = () => setIsOpen(!isOpen);

  const onSelectItem = (value) => {
    setSelectedValue(value);
    setIsOpen(false);
    onSelect(value);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.dropdown} onPress={toggleOpen}>
        <Text style={styles.dropdownText}>{selectedValue}</Text>
      </TouchableOpacity>
      {isOpen && (
        <View style={styles.dropdownItems}>
          {data.map((item, index) => (
            <TouchableOpacity
              key={index}
              style={styles.dropdownItem}
              onPress={() => onSelectItem(item)}
            >
              <Text style={styles.dropdownItemText}>{item}</Text>
            </TouchableOpacity>
          ))}
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
  dropdown: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    justifyContent: "center",
    paddingLeft: 10,
  },
  dropdownText: {
    fontSize: 16,
  },
  dropdownItems: {
    borderColor: "gray",
    borderWidth: 1,
    borderTopWidth: 0,
    marginTop: -1,
  },
  dropdownItem: {
    height: 40,
    justifyContent: "center",
    paddingLeft: 10,
  },
  dropdownItemText: {
    fontSize: 16,
  },
});

export default CustomDropdown;
