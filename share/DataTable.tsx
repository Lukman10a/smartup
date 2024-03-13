import { hp } from "@/utils/dimensions";
import * as React from "react";
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
} from "react-native";
import { DataTable } from "react-native-paper";
import { Ionicons } from "@expo/vector-icons";
import { COMPLETED_PAYMENT } from "@/data";

const AppDataTable = ({
  item,
  showOptions,
}: {
  item?: any;
  showOptions?: boolean;
}) => {
  const [visible, setVisible] = React.useState(false);
  const dropdownButtonRef = React.useRef<TouchableOpacity>(null);
  const [dropdownTop, setDropdownTop] = React.useState(0);
  const [dropdownRight, setDropdownRight] = React.useState(0);
  const [selected, setSelected] = React.useState(undefined);
  const [positions, setPositions] = React.useState<{
    [key: number]: { x: number; y: number };
  }>({});

  const handleLayout = (event: LayoutChangeEvent, id: number) => {
    const { x, y } = event.nativeEvent.layout;
    setPositions((prevPositions) => ({
      ...prevPositions,
      [id]: { x, y },
    }));
  };

  const windowWidth = Dimensions.get("window").width;
  const windowHeight = Dimensions.get("window").height;

  const [page, setPage] = React.useState<number>(0);
  const [numberOfItemsPerPageList] = React.useState([2, 3, 4]);
  const [itemsPerPage, onItemsPerPageChange] = React.useState(
    numberOfItemsPerPageList[0]
  );

  const [items] = React.useState(COMPLETED_PAYMENT);

  const from = page * itemsPerPage;
  const to = Math.min((page + 1) * itemsPerPage, items.length);

  React.useEffect(() => {
    setPage(0);
  }, [itemsPerPage]);

  const toggleDropdown = (
    index: number,
    event: NativeSyntheticEvent<NativeTouchEvent>
  ): void => {
    visible ? setVisible(false) : openDropdown(index, event);
  };

  // const dropdownButtonRefs = useRef([]);

  const openDropdown = (
    index: number,
    event: NativeSyntheticEvent<NativeTouchEvent>
  ): void => {
    const { pageX, pageY } = event.nativeEvent;
    const position = positions[index];
    dropdownButtonRef.current?.measure((_fx, _fy, _w, h, _px, py) => {
      if (!isNaN(py) && !isNaN(h) && !isNaN(_px) && !isNaN(_w)) {
        console.log({
          position: positions[index],
          _fx,
          _fy,
          _w,
          h,
          _px,
          py,
          index,
        });

        setDropdownTop(pageY + h);
        // Calculate the right position based on the window width and the x-coordinate of the ellipsis button
        setDropdownRight(pageX + _fx - _w);

        // Position the dropdown 5px below the ellipsis button
        // setDropdownTop(windowHeight - _px);
        // // Calculate the right position based on the window width and the x-coordinate of the ellipsis button
        // setDropdownRight(windowWidth - positions[index].x);
      } else {
        console.error("Invalid values for dropdown position");
      }
    });

    setVisible(true);
  };

  // const handlePress = (
  //   id: number,
  //   event: NativeSyntheticEvent<NativeTouchEvent>
  // ) => {
  //   const { pageX, pageY } = event.nativeEvent;
  //   const position = positions[id];
  //   setDropdownTop(pageY);
  //   // Calculate the right position based on the window width and the x-coordinate of the ellipsis button
  //   setDropdownRight(pageX);
  //   console.log(
  //     `Position of item ${id}: x=${position.x}, y=${position.y}, PageX=${pageX}, PageY=${pageY}, top=${dropdownTop}, right=${dropdownRight}`
  //   );
  // };

  const renderDropdown = (): React.ReactElement<any, any> => {
    return (
      <Modal
        style={{ flex: 1 }}
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
    <DataTable style={styles.table}>
      <DataTable.Header>
        <DataTable.Title textStyle={styles.tableTitle}>Id</DataTable.Title>
        <DataTable.Title textStyle={styles.tableTitle}>
          Student Name
        </DataTable.Title>
        <DataTable.Title textStyle={styles.tableTitle} numeric>
          Amount
        </DataTable.Title>
        <DataTable.Title textStyle={styles.tableTitle} numeric>
          Due Date
        </DataTable.Title>
        {showOptions && (
          <DataTable.Title textStyle={styles.tableTitle} numeric>
            {" "}
          </DataTable.Title>
        )}
      </DataTable.Header>

      <FlatList
        showsVerticalScrollIndicator={false}
        data={items}
        renderItem={({ item, index }) => (
          <>
            <DataTable.Row
              key={item.id}
              style={{ gap: 30, position: "relative" }}
            >
              <DataTable.Cell textStyle={styles.rowText}>
                {item.id}
              </DataTable.Cell>
              <DataTable.Cell>
                <Text numberOfLines={1} style={styles.rowText}>
                  {item.name}
                </Text>
              </DataTable.Cell>
              <DataTable.Cell numeric>
                <Text numberOfLines={1} style={styles.rowText}>
                  {item.amount}
                </Text>
              </DataTable.Cell>
              <DataTable.Cell
                numeric
                //   style={{ flexDirection: "row", alignItems: "center" }}
              >
                <Text style={styles.rowText}>{item.date}</Text>
              </DataTable.Cell>
              {showOptions && (
                <DataTable.Cell style={{ position: "relative" }} numeric>
                  <>
                    <TouchableOpacity
                      style={{
                        alignItems: "center",
                        justifyContent: "center",
                        padding: 5,
                        width: "100%",
                        borderWidth: 1,
                        borderColor: "red",
                      }}
                      ref={dropdownButtonRef}
                      onPress={(event) => {
                        // handlePress(index, event);
                        toggleDropdown(index, event);
                      }}
                      onLayout={(event) => handleLayout(event, index)}
                    >
                      <Ionicons
                        name="ellipsis-vertical"
                        size={18}
                        color="#202020"
                      />
                      {renderDropdown()}
                    </TouchableOpacity>
                  </>
                </DataTable.Cell>
              )}
            </DataTable.Row>
          </>
        )}
        keyExtractor={(item) => item.id.toString()}
      />

      {/* <DataTable.Pagination
        page={page}
        numberOfPages={Math.ceil(items.length / itemsPerPage)}
        onPageChange={(page) => setPage(page)}
        label={`${from + 1}-${to} of ${items.length}`}
        numberOfItemsPerPageList={numberOfItemsPerPageList}
        numberOfItemsPerPage={itemsPerPage}
        onItemsPerPageChange={onItemsPerPageChange}
        showFastPaginationControls
        selectPageDropdownLabel={"Rows per page"}
      /> */}
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
