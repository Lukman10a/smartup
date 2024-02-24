// import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
// import React, { useState } from "react";
// import { Entypo } from "@expo/vector-icons";

// export default function DropDown() {
//   const [visible, setVisible] = useState(false);

//   const toggleDropdown = () => {
//     setVisible(!visible);
//   };

//   const renderDropdown = () => {
//     if (visible) {
//       return (
//         <View style={styles.dropdown}>
//           <View>
//             <Text>This is where the dropdown will be rendered.</Text>
//           </View>
//           <View>
//             <Text>This is where the dropdown will be rendered.</Text>
//           </View>
//           <View>
//             <Text>This is where the dropdown will be rendered.</Text>
//           </View>
//         </View>
//       );
//     }
//   };

//   return (
//     <TouchableOpacity style={styles.button} onPress={toggleDropdown}>
//       {renderDropdown()}
//       <Text style={styles.buttonText}>{}</Text>
//       <Entypo name="chevron-down" size={24} color="black" />
//     </TouchableOpacity>
//   );
// }

// const styles = StyleSheet.create({
//   button: {
//     flexDirection: "row",
//     alignItems: "center",
//     backgroundColor: "#efefef",
//     height: 50,
//     width: "90%",
//     paddingHorizontal: 10,
//     zIndex: 1,
//   },
//   buttonText: {
//     flex: 1,
//     textAlign: "center",
//   },
//   dropdown: {
//     position: "absolute",
//     backgroundColor: "#fff",
//     top: 50,
//   },
// });

// import { View, Text } from "react-native";
// import React, { useState } from "react";
// import DropDownPicker from "react-native-dropdown-picker";

// export default function DropDown() {
//   const [isOpen, setIsOpen] = useState(false);
//   const [currentValue, setCurrentValue] = useState();

//   const items = [
//     { label: "Fee", value: "sea" },
//     { label: "class", value: "way" },
//     { label: "session", value: "ocean" },
//     { label: "payment", value: "rock" },
//   ];
//   return (
//     <View>
//       <DropDownPicker
//         items={items}
//         open={isOpen}
//         value={currentValue}
//         setOpen={() => setIsOpen(!isOpen)}
//         setValue={(val) => setCurrentValue(val)}
//       />
//     </View>
//   );
// }
// ``;

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

// import React, { useState } from "react";
// import { StyleSheet, Text, View } from "react-native";
// import { Dropdown } from "react-native-element-dropdown";
// import AntDesign from "@expo/vector-icons/AntDesign";

// const data = [
//   { label: "Item 1", value: "1" },
//   { label: "Item 2", value: "2" },
//   { label: "Item 3", value: "3" },
//   { label: "Item 4", value: "4" },
//   { label: "Item 5", value: "5" },
//   { label: "Item 6", value: "6" },
//   { label: "Item 7", value: "7" },
//   { label: "Item 8", value: "8" },
// ];

// const DropdownComponent = () => {
//   const [value, setValue] = useState(null);
//   const [isFocus, setIsFocus] = useState(false);

//   const renderLabel = () => {
//     if (value || isFocus) {
//       return (
//         <Text style={[styles.label, isFocus && { color: "blue" }]}>
//           Dropdown label
//         </Text>
//       );
//     }
//     return null;
//   };

//   return (
//     <View style={styles.container}>
//       {renderLabel()}
//       <Dropdown
//         style={[styles.dropdown, isFocus && { borderColor: "blue" }]}
//         placeholderStyle={styles.placeholderStyle}
//         selectedTextStyle={styles.selectedTextStyle}
//         // inputSearchStyle={styles.inputSearchStyle}
//         iconStyle={styles.iconStyle}
//         data={data}
//         // search
//         maxHeight={200}
//         labelField="label"
//         valueField="value"
//         placeholder={!isFocus ? "Select item" : "..."}
//         searchPlaceholder="Search..."
//         value={value}
//         onFocus={() => setIsFocus(true)}
//         onBlur={() => setIsFocus(false)}
//         onChange={(item) => {
//           setValue(item.value);
//           setIsFocus(false);
//         }}
//       />
//     </View>
//   );
// };

// export default DropdownComponent;

// const styles = StyleSheet.create({
//   container: {
//     backgroundColor: "white",
//     padding: 16,
//     paddingVertical: 20,
//     paddingHorizontal: 4,
//   },
//   dropdown: {
//     height: 50,
//     borderColor: "gray",
//     borderWidth: 0.5,
//     borderRadius: 8,
//     paddingHorizontal: 8,
//   },
//   icon: {
//     marginRight: 5,
//   },
//   label: {
//     position: "absolute",
//     backgroundColor: "white",
//     left: 22,
//     top: 8,
//     zIndex: 999,
//     paddingHorizontal: 8,
//     fontSize: 14,
//   },
//   placeholderStyle: {
//     fontSize: 16,
//   },
//   selectedTextStyle: {
//     fontSize: 16,
//     backgroundColor: "red",
//   },
//   iconStyle: {
//     width: 20,
//     height: 20,
//   },
//   // inputSearchStyle: {
//   //   height: 40,
//   //   fontSize: 16,
//   // },
// });
