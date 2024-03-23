import {
  FlatList,
  Modal,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import React, { ReactElement, useRef, useState } from "react";
import { hp } from "@/utils/dimensions";
import { Ionicons } from "@expo/vector-icons";

const TableRow = ({
  item,
  showOptions,
}: {
  item: any;
  showOptions?: boolean;
}) => {
  const [visible, setVisible] = useState(false);
  const dropdownButtonRef = useRef<TouchableOpacity>(null);
  const [dropdownTop, setDropdownTop] = useState(0);
  const [dropdownRight, setDropdownRight] = useState(0);
  const [selected, setSelected] = useState(undefined);

  const toggleDropdown = (): void => {
    visible ? setVisible(false) : openDropdown();
  };

  const openDropdown = (): void => {
    dropdownButtonRef.current?.measure((_fx, _fy, _w, h, _px, py) => {
      setDropdownTop(py + h);
      setDropdownRight(_px - (_w + 50));
    });
    setVisible(true);
  };

  const renderDropdown = (): ReactElement<any, any> => {
    return (
      <Modal
        visible={visible}
        transparent
        animationType="fade"
        onRequestClose={() => setVisible(false)}
      >
        <TouchableOpacity
          style={styles.overlay}
          onPress={() => setVisible(false)}
        >
          <View
            style={[styles.dropdown, { top: dropdownTop, left: dropdownRight }]}
          >
            <Text style={{ padding: 10 }}>Take Action</Text>
            <Text style={{ padding: 10 }}>View details</Text>
          </View>
        </TouchableOpacity>
      </Modal>
    );
  };

  return (
    <View style={styles.tableRow}>
      <View style={{ alignItems: "flex-start" }}>
        <Text style={{ fontSize: hp(16), color: "#7a8289" }}>{item.id}</Text>
      </View>
      <View style={{ alignItems: "flex-start" }}>
        <Text style={{ fontSize: hp(16), color: "#7a8289" }}>{item.name}</Text>
      </View>
      <View style={{ alignItems: "flex-start" }}>
        <Text style={{ fontSize: hp(16), color: "#7a8289" }}>
          {item.amount}
        </Text>
      </View>
      <View style={{ alignItems: "flex-start" }}>
        <Text style={{ fontSize: hp(16), color: "#7a8289" }}>{item.date}</Text>
      </View>
      {showOptions && (
        <TouchableOpacity
          style={{ alignItems: "flex-start", padding: 5, width: "auto" }}
          onPress={toggleDropdown}
          ref={dropdownButtonRef}
        >
          {renderDropdown()}
          <Ionicons name="ellipsis-vertical" size={24} color="black" />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default TableRow;

const styles = StyleSheet.create({
  tableRow: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: "#E4E4E4",
    paddingVertical: 10,
    gap: hp(15),
    alignItems: "flex-start",
    justifyContent: "space-between",
  },
  overlay: {
    width: "100%",
    alignItems: "center",
    flex: 1,
  },
  buttonText: {
    flex: 1,
    color: "#666666",
    fontWeight: "500",
  },
  dropdown: {
    position: "absolute",
    backgroundColor: "#fff",
    gap: 10,
    width: hp(150),

    shadowColor: "#000000",
    shadowRadius: 4,
    shadowOffset: { height: 4, width: 0 },
    shadowOpacity: 0.5,
    borderRadius: 4,
    elevation: 5,
  },
});
