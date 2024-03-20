import { hp } from "@/utils/dimensions";
import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Checkbox } from "react-native-paper";

interface PaymentDetailProps {
  title: string;
  price: string;
  onSelect: () => void;
  isSelected: boolean;
}

export default function PaymentDetail({
  title,
  price,
  onSelect,
  isSelected,
}: PaymentDetailProps) {
  return (
    <View style={styles.paymentDetailContainer}>
      <View style={styles.titleDetail}>
        <Text style={styles.title}>{title}</Text>
        <Checkbox.Android
          color="black"
          status={isSelected ? "checked" : "unchecked"}
          onPress={onSelect}
        />
      </View>
      <View style={styles.titleDetail}>
        <Text style={styles.price}>{price}</Text>
        <TouchableOpacity style={styles.pay}>
          <Text style={styles.payButton}>Pay Now</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  paymentDetailContainer: {
    backgroundColor: "#F9F9F9",
    borderRadius: 8,
    padding: hp(10),
    margin: hp(20),
    marginVertical: hp(10),
    gap: hp(14),
  },
  titleDetail: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    fontSize: hp(14),
    color: "#93999E",
  },
  price: {
    fontSize: hp(20),
    fontWeight: "300",
  },
  pay: {
    backgroundColor: "#DC350026",
    padding: hp(10),
    borderRadius: hp(10),
  },
  payButton: {
    color: "#DC3500",
    paddingHorizontal: 12,
  },
});
