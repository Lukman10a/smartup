import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { hp } from "@/utils/dimensions";
import PaymentSummary from "@/screen/PaymentSummary";

type TableType = string;

interface TableButtonProps<T extends TableType> {
  tableTypes: { type: T; label: string }[];
  activeTableType: T;
  setTableType: (type: T) => void;
}

export default function TableButton<T extends TableType>({
  tableTypes,
  activeTableType,
  setTableType,
}: TableButtonProps<T>) {
  return (
    <View style={styles.paymentButtonContainer}>
      {tableTypes.map((item) => (
        <TouchableOpacity
          key={item.type}
          style={
            activeTableType === item.type
              ? styles.activeButtonContainer
              : styles.tabButtonContainer
          }
          onPress={() => setTableType(item.type)}
        >
          <Text
            style={
              activeTableType === item.type
                ? styles.activeTabButtonText
                : styles.tabButtonText
            }
          >
            {item.label}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  paymentButtonContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: hp(30),
    paddingHorizontal: hp(20),
  },
  activeButtonContainer: {
    backgroundColor: "#DC3500",
    padding: hp(18),
    paddingHorizontal: hp(34),
    borderTopEndRadius: 10,
    borderTopStartRadius: 10,
    borderBottomWidth: 2,
    borderBottomColor: "#DC3500",
    flex: 1,
    alignItems: "center",
  },
  activeTabButtonText: {
    color: "#ffff",
    fontSize: hp(12),
  },
  tabButtonContainer: {
    paddingHorizontal: hp(34),
    padding: hp(18),
    borderBottomWidth: 2,
    borderBottomColor: "#DC3500",
    flex: 1,
    alignItems: "center",
  },
  tabButtonText: {
    color: "#BEBEBE",
    fontSize: hp(12),
  },
});
