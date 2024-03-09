import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { hp } from "@/utils/dimensions";
import PaymentSummary from "@/screen/PaymentSummary";

export default function TableButton({
  tableType,
  setTableType,
}: {
  tableType: "Pending payments" | "Payment history";
  setTableType: (type: "Pending payments" | "Payment history") => void;
}) {
  return (
    <View style={styles.paymentButtonContainer}>
      <TouchableOpacity
        style={
          tableType === "Pending payments"
            ? styles.activeButtonContainer
            : styles.tabButtonContainer
        }
        onPress={() => setTableType("Pending payments")}
      >
        <Text
          style={
            tableType === "Pending payments"
              ? styles.activeTabButtonText
              : styles.tabButtonText
          }
        >
          Pending payments
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={
          tableType === "Payment history"
            ? styles.activeButtonContainer
            : styles.tabButtonContainer
        }
        onPress={() => setTableType("Payment history")}
      >
        <Text
          style={
            tableType === "Payment history"
              ? styles.activeTabButtonText
              : styles.tabButtonText
          }
        >
          Payment history
        </Text>
      </TouchableOpacity>
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
