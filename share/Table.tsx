import { FlatList, Text, View, StyleSheet } from "react-native";
import React from "react";
import { hp } from "@/utils/dimensions";
const data = [
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
    name: "Mei",
    amount: "₦320,000.00",
    date: "18-11-2024",
  },
  {
    id: 4,
    name: "Steve",
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
    name: "Mei",
    amount: "₦320,000.00",
    date: "18-11-2024",
  },
  {
    id: 7,
    name: "Steve",
    amount: "₦320,000.00",
    date: "18-11-2024",
  },
  {
    id: 8,
    name: "Mei",
    amount: "₦320,000.00",
    date: "18-11-2024",
  },
  {
    id: 9,
    name: "Steve",
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
];
const TableOne = () => {
  const item = ({ item }: { item: any }) => (
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
    </View>
  );
  return (
    <View
      style={{
        flex: 1,
        margin: hp(15),
        borderWidth: 1,
        borderColor: "#E4E4E4",
        borderRadius: 10,
        padding: 10,
      }}
    >
      <View style={styles.tableRow}>
        <View style={{ alignItems: "flex-start" }}>
          <Text style={{ fontSize: hp(16), color: "black", fontWeight: "500" }}>
            Id
          </Text>
        </View>
        <View style={{ alignItems: "flex-start" }}>
          <Text style={{ fontSize: hp(16), color: "black", fontWeight: "500" }}>
            Student name
          </Text>
        </View>
        <View style={{ alignItems: "flex-start" }}>
          <Text style={{ fontSize: hp(16), color: "black", fontWeight: "500" }}>
            Amount
          </Text>
        </View>
        <View style={{ alignItems: "flex-start" }}>
          <Text style={{ fontSize: hp(16), color: "black", fontWeight: "500" }}>
            Date
          </Text>
        </View>
      </View>
      <FlatList
        style={{}}
        showsVerticalScrollIndicator={false}
        data={data}
        renderItem={item}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};
export default TableOne;

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
});
