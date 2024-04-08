import { View, Text, StyleSheet } from "react-native";
import React from "react";
import FlutterPaymentComponent from "@/share/FlutterPayment";
import { PaystackPayment } from "@/share/PaystackPayment";

export default function MakePaymentPage() {
  return (
    <View style={styles.container}>
      <FlutterPaymentComponent />
      <PaystackPayment />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
