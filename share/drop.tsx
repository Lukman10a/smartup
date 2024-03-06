import React, { FC, ReactElement, useRef, useState } from "react";
import {
  FlatList,
  Modal,
  StyleProp,
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { hp } from "@/utils/dimensions";

interface Props {
  label: string;
  data: Array<{ label: string; value: string }>;
  onSelect: (item: { label: string; value: string }) => void;
  containerStyle?: StyleProp<ViewStyle>;
  labelStyle?: StyleProp<TextStyle>;
  iconName?: any;
}

const Dropdown: FC<Props> = ({
  label,
  data,
  onSelect,
  labelStyle,
  containerStyle,
  iconName,
}) => {
  const [visible, setVisible] = useState(false);
  const dropdownButtonRef = useRef<TouchableOpacity>(null);
  const [dropdownTop, setDropdownTop] = useState(0);
  const [selected, setSelected] = useState(undefined);

  const onItemPress = (item: any): void => {
    setSelected(item);
    onSelect(item);
    setVisible(false);
  };

  const renderItem = ({ item }: { item: any }): ReactElement<any, any> => (
    <TouchableOpacity
      style={[
        styles.item,
        item === selected && styles.selectedDropDownDetailOption,
      ]}
      onPress={() => onItemPress(item)}
    >
      <Text>{item.label}</Text>
    </TouchableOpacity>
  );

  const toggleDropdown = (): void => {
    visible ? setVisible(false) : openDropdown();
  };

  const openDropdown = (): void => {
    dropdownButtonRef.current?.measure((_fx, _fy, _w, h, _px, py) => {
      setDropdownTop(py + h);
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
          <View style={[styles.dropdown, { top: dropdownTop }]}>
            <FlatList
              data={data}
              renderItem={renderItem}
              keyExtractor={(item, index) => index.toString()}
            />
          </View>
        </TouchableOpacity>
      </Modal>
    );
  };

  return (
    <TouchableOpacity
      style={[styles.button, containerStyle]}
      onPress={toggleDropdown}
      ref={dropdownButtonRef}
    >
      {renderDropdown()}
      <Text style={[styles.buttonText, labelStyle]}>{label}</Text>
      <Ionicons
        name={iconName ? iconName : "chevron-forward-outline"}
        size={20}
        color="black"
      />
    </TouchableOpacity>
  );
};

export default Dropdown;

const styles = StyleSheet.create({
  button: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    height: hp(60),
    paddingHorizontal: 10,
    zIndex: 1,
    borderRadius: 8,
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
    width: "80%",
    shadowColor: "#000000",
    shadowRadius: 4,
    shadowOffset: { height: 4, width: 0 },
    shadowOpacity: 0.5,
    borderRadius: 4,
    elevation: 5,
  },
  item: {
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderBottomWidth: 0.5,
    borderColor: "#66666664",
  },
  selectedDropDownDetailOption: {
    marginTop: 10,
    padding: 15,
    backgroundColor: "#DC35001A",
    color: "#DC3500",
    marginVertical: 4,
  },
});
