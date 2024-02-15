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

import { View, Text } from "react-native";
import React, { useState } from "react";
import DropDownPicker from "react-native-dropdown-picker";

export default function DropDown() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentValue, setCurrentValue] = useState();

  const items = [
    { label: "Fee", value: "sea" },
    { label: "Fee", value: "sea" },
    { label: "Fee", value: "sea" },
    { label: "Fee", value: "sea" },
  ];
  return (
    <View>
      <DropDownPicker
        items={items}
        open={isOpen}
        value={currentValue}
        setOpen={() => setIsOpen(!isOpen)}
        setValue={(val) => setCurrentValue(val)}
      />
    </View>
  );
}
