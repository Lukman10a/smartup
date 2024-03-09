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
    padding: 10,
    margin: 20,
    marginVertical: 10,
    gap: 14,
  },
  titleDetail: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    fontSize: 14,
    color: "#93999E",
  },
  price: {
    fontSize: 20,
    fontWeight: "400",
  },
  pay: {
    backgroundColor: "#DC350026",
    padding: 10,
    borderRadius: 10,
  },
  payButton: {
    color: "#DC3500",
    paddingHorizontal: 12,
  },
});
