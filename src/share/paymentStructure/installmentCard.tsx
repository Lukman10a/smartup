import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { hp } from "@/utils/dimensions";

const InstallmentCard = ({
  name,
  date,
  amount,
}: {
  name: string;
  date: string;
  amount: string;
}) => {
  return (
    <View style={styles.selectedInstallmentSplitContainer}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Text style={styles.detailText}>{name}</Text>
        <Text style={{ fontSize: hp(10), color: "#DB3A07" }}>
          Due date:{date}
        </Text>
      </View>

      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Text style={{ fontSize: hp(16) }}>{amount}</Text>
        <TouchableOpacity style={styles.buttonContainer}>
          <Text style={styles.buttonText}>Edit</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default InstallmentCard;

const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: "#DC35001A",
    paddingHorizontal: hp(16),
    paddingVertical: hp(5),
    borderRadius: hp(6),
  },
  detailText: {
    fontSize: hp(14),
    color: "#646464",
  },
  buttonText: {
    textAlign: "center",
    color: "#DB3A07",
    fontSize: hp(12),
  },
  selectedInstallmentSplitContainer: {
    backgroundColor: "white",
    borderRadius: 8,
    padding: hp(10),
    gap: hp(7),
  },
});
