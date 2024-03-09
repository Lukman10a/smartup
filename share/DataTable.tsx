import { hp } from "@/utils/dimensions";
import * as React from "react";
import {
  FlatList,
  Modal,
  TouchableOpacity,
  View,
  Text,
  StyleSheet,
} from "react-native";
import { DataTable } from "react-native-paper";
import { Ionicons } from "@expo/vector-icons";

const AppDataTable = () => {
  const [visible, setVisible] = React.useState(false);
  const dropdownButtonRef = React.useRef<TouchableOpacity>(null);
  const [dropdownTop, setDropdownTop] = React.useState(0);
  const [dropdownRight, setDropdownRight] = React.useState(0);
  const [selected, setSelected] = React.useState(undefined);

  const [page, setPage] = React.useState<number>(0);
  const [numberOfItemsPerPageList] = React.useState([2, 3, 4]);
  const [itemsPerPage, onItemsPerPageChange] = React.useState(
    numberOfItemsPerPageList[0]
  );

  const [items] = React.useState([
    {
      id: 1,
      name: "Ogunsegbe Tosin",
      amount: "₦320,000.00",
      date: "18-11-2024",
    },
    {
      id: 2,
      name: "Damilare Taiwo",
      amount: "₦320,000.00",
      date: "18-11-2024",
    },
    {
      id: 3,
      name: "Oguntade Demilade",
      amount: "₦320,000.00",
      date: "18-11-2024",
    },
    {
      id: 4,
      name: "Demilade Taiwo",
      amount: "₦320,000.00",
      date: "18-11-2024",
    },
    {
      id: 5,
      name: "Damilare Taiwo",
      amount: "₦320,000.00",
      date: "18-11-2024",
    },
    {
      id: 6,
      name: "Oguntade Demilade",
      amount: "₦320,000.00",
      date: "18-11-2024",
    },
    {
      id: 7,
      name: "Oguntade Demilade",
      amount: "₦320,000.00",
      date: "18-11-2024",
    },
    {
      id: 8,
      name: "Damilare Taiwo",
      amount: "₦320,000.00",
      date: "18-11-2024",
    },
    {
      id: 9,
      name: "Demilade Taiw",
      amount: "₦320,000.00",
      date: "18-11-2024",
    },
    {
      id: 10,
      name: "Mei",
      amount: "₦320,000.00",
      date: "18-11-2024",
    },
    {
      id: 11,
      name: "Steve",
      amount: "₦320,000.00",
      date: "18-11-2024",
    },
  ]);

  const from = page * itemsPerPage;
  const to = Math.min((page + 1) * itemsPerPage, items.length);

  React.useEffect(() => {
    setPage(0);
  }, [itemsPerPage]);

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

  const renderDropdown = (): React.ReactElement<any, any> => {
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
        {/* <DataTable.Title textStyle={styles.tableTitle}> </DataTable.Title> */}
      </DataTable.Header>

      <FlatList
        showsVerticalScrollIndicator={false}
        data={items}
        renderItem={({ item }) => (
          <DataTable.Row key={item.id} style={{ gap: 30 }}>
            <DataTable.Cell>{item.id}</DataTable.Cell>
            <DataTable.Cell>
              <Text numberOfLines={1}>{item.name}</Text>
            </DataTable.Cell>
            <DataTable.Cell numeric>
              <Text numberOfLines={1}>{item.amount}</Text>
            </DataTable.Cell>
            <DataTable.Cell
              numeric
              //   style={{ flexDirection: "row", alignItems: "center" }}
            >
              <Text>{item.date}</Text>
            </DataTable.Cell>
            {/* <DataTable.Cell style={{ position: "relative" }}>
              <View>
                <TouchableOpacity
                  style={{
                    alignItems: "flex-start",
                    padding: 5,
                    width: "auto",
                    position: "relative",
                  }}
                  onPress={toggleDropdown}
                  ref={dropdownButtonRef}
                >
                  {renderDropdown()}
                  <Ionicons name="ellipsis-vertical" size={24} color="black" />
                </TouchableOpacity>
              </View>
            </DataTable.Cell> */}
          </DataTable.Row>
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
  tableTitle: { fontSize: hp(16), color: "black", fontWeight: "500" },
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
