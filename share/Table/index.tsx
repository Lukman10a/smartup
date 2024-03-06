import { FlatList, Text, View, StyleSheet } from "react-native";
import React from "react";
import { hp } from "@/utils/dimensions";
import TableHeader from "./TableHeader";
import TableRow from "./TableRow";
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

const Table = ({ showOptions }: { showOptions?: boolean }) => {
  return (
    <View
      style={{
        flex: 1,
        margin: hp(15),
        borderWidth: 1,
        borderColor: "#E4E4E4",
        borderRadius: hp(10),
        padding: hp(10),
      }}
    >
      <TableHeader />
      <FlatList
        style={{}}
        showsVerticalScrollIndicator={false}
        data={data}
        renderItem={({ item }) => (
          <TableRow item={item} showOptions={showOptions} />
        )}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};
export default Table;

const styles = StyleSheet.create({});
