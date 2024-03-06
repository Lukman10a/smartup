import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Entypo } from "@expo/vector-icons";

export default function InstitutionPage() {
  return (
    <View style={styles.container}>
      <View style={styles.paymentButtonContainer}>
        <TouchableOpacity style={styles.leftButtonContainer}>
          <Text style={styles.leftButtonText}>Completed payments</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.rightButtonContainer}>
          <Text style={styles.rightButtonText}>Outstanding payments</Text>
        </TouchableOpacity>
      </View>

      <View>
        <View>
          <Text>2023 / 2024 Academic session</Text>
          <Entypo name="chevron-down" size={22} color="#646464" />
        </View>
        <View>
          <Text>3rd Term</Text>
          <Entypo name="chevron-down" size={22} color="#646464" />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffff",
  },
  paymentButtonContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 40,
  },
  leftButtonContainer: {
    backgroundColor: "#DC3500",
    padding: 20,
    paddingHorizontal: 25,
    borderTopEndRadius: 10,
    borderTopStartRadius: 10,
    borderBottomWidth: 3,
    borderBottomColor: "#DC3500",
  },
  leftButtonText: {
    color: "#ffff",
  },
  rightButtonContainer: {
    paddingHorizontal: 25,
    padding: 20,
    borderBottomWidth: 3,
    borderBottomColor: "#DC3500",
  },
  rightButtonText: {
    color: "#BEBEBE",
  },
});
