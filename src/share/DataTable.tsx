import React, { useState, useEffect, useRef, ReactNode } from "react";
import {
  FlatList,
  Modal,
  TouchableOpacity,
  View,
  Text,
  StyleSheet,
  Dimensions,
  LayoutChangeEvent,
  NativeSyntheticEvent,
  NativeTouchEvent,
  ListRenderItem,
} from "react-native";
import { DataTable } from "react-native-paper";
import { Ionicons } from "@expo/vector-icons";
import { hp } from "@/utils/dimensions";
import Popover, { PopoverPlacement } from "react-native-popover-view";

const AppDataTable: React.FC<{
  items?: any;
  showOptions?: boolean;
  tableOptions: ReactNode;
  renderItem?: ListRenderItem<any>;
  headerItems: { name: string; value: string }[];
}> = ({ items, showOptions, tableOptions, renderItem, headerItems }) => {
  const [visible, setVisible] = useState(false);
  const [selected, setSelected] = useState<number>();
  const dropdownButtonRef = useRef<TouchableOpacity>(null);
  const [dropdownTop, setDropdownTop] = useState(0);
  const [dropdownRight, setDropdownRight] = useState(0);
  const [positions, setPositions] = useState<{
    [key: number]: { x: number; y: number };
  }>({});

  const windowWidth = Dimensions.get("window").width;
  const windowHeight = Dimensions.get("window").height;

  const [page, setPage] = useState<number>(0);
  const [numberOfItemsPerPageList] = useState([2, 3, 4]);
  const [itemsPerPage, setItemsPerPage] = useState(numberOfItemsPerPageList[0]);

  useEffect(() => {
    setPage(0);
  }, [itemsPerPage]);

  // const handleLayout = (event: LayoutChangeEvent, id: number) => {
  //   const { x, y } = event.nativeEvent.layout;
  //   setPositions((prevPositions) => ({
  //     ...prevPositions,
  //     [id]: { x, y },
  //   }));
  // };

  // const toggleDropdown = (
  //   index: number,
  //   event: NativeSyntheticEvent<NativeTouchEvent>
  // ) => {
  //   setSelected(index);
  //   setVisible(!visible);
  //   openDropdown(index, event);
  // };

  // const openDropdown = (
  //   index: number,
  //   event: NativeSyntheticEvent<NativeTouchEvent>
  // ) => {
  //   const { pageX, pageY } = event.nativeEvent;
  //   const position = positions[index];
  //   dropdownButtonRef.current?.measureInWindow((x, y, width, height) => {
  //     if (!isNaN(width) && !isNaN(height)) {
  //       const adjustedPageY = pageY + height;
  //       const adjustedPageX = pageX - width;
  //       const dropDownTop = Math.min(adjustedPageY, windowHeight + height);
  //       const dropDownRight = Math.min(adjustedPageX, windowHeight + height);
  //       setDropdownTop(dropDownTop);
  //       setDropdownRight(dropDownRight);
  //       if (selected === index) {
  //         console.log({ position });

  //         setVisible(true);
  //       }
  //     } else {
  //       console.error("Invalid values for dropdown position");
  //     }
  //   });
  // };

  // const renderDropdown = (): React.ReactElement<any, any> => (
  //   <Modal
  //     style={{ flex: 1 }}
  //     visible={visible}
  //     transparent
  //     animationType="fade"
  //     onRequestClose={() => setVisible(false)}
  //   >
  //     <TouchableOpacity
  //       style={styles.overlay}
  //       onPress={() => setVisible(false)}
  //     >
  //       <View
  //         style={[styles.dropdown, { top: dropdownTop, left: dropdownRight }]}
  //       >
  //         {tableOptions}
  //       </View>
  //     </TouchableOpacity>
  //   </Modal>
  // );

  const defaultRenderItem = ({ item, index }: { item: any; index: number }) => (
    <DataTable.Row key={item.id} style={{ gap: 30, position: "relative" }}>
      {headerItems?.map((header, i) => (
        <DataTable.Cell
          key={i}
          textStyle={styles.rowText}
          numeric={i > 1} // assuming Amount and Due Date are numeric
        >
          <Text numberOfLines={1} style={styles.rowText}>
            {item[header.value]}
          </Text>
        </DataTable.Cell>
      ))}
      {showOptions && (
        <DataTable.Cell style={{ position: "relative" }} numeric>
          <Popover
            placement={PopoverPlacement.BOTTOM}
            // mode="js-modal"
            from={
              <TouchableOpacity
                style={styles.dropdownButton}
                ref={dropdownButtonRef}
                // onPress={(event) => toggleDropdown(index, event)}
                // onLayout={(event) => handleLayout(event, index)}
              >
                {/* {selected === index && renderDropdown()} */}
                <Ionicons name="ellipsis-vertical" size={18} color="#202020" />
              </TouchableOpacity>
            }
          >
            {tableOptions}
          </Popover>
        </DataTable.Cell>
      )}
    </DataTable.Row>
  );

  const renderRowItem = renderItem || defaultRenderItem;

  return (
    <DataTable style={styles.table}>
      <DataTable.Header>
        {headerItems?.map((header, i) => (
          <DataTable.Title
            key={i}
            textStyle={styles.tableTitle}
            numeric={i > 1} // assuming Amount and Due Date are numeric
          >
            {header.name}
          </DataTable.Title>
        ))}
        {showOptions && (
          <DataTable.Title textStyle={styles.tableTitle} numeric>
            {" "}
          </DataTable.Title>
        )}
      </DataTable.Header>

      <FlatList
        showsVerticalScrollIndicator={false}
        data={items}
        renderItem={renderRowItem}
        keyExtractor={(item) => item.id.toString()}
      />
    </DataTable>
  );
};

export default AppDataTable;

const styles = StyleSheet.create({
  table: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#E4E4E4",
    borderRadius: hp(10),
    padding: hp(10),
  },
  tableTitle: { fontSize: hp(10), color: "black", fontWeight: "500" },
  rowText: { fontSize: hp(10), color: "#7a8289" },
  overlay: {
    width: "100%",
    alignItems: "center",
    flex: 1,
    backgroundColor: "#6666666a",
  },
  buttonText: { flex: 1, color: "#666666", fontWeight: "500" },
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
  dropdownButton: {
    alignItems: "center",
    justifyContent: "center",
    padding: 5,
    width: "100%",
    // borderWidth: 1,
    // borderColor: "red",
  },
});
