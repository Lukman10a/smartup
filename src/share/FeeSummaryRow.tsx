import { StyleSheet, Text, View, StyleProp, ViewStyle } from "react-native";
import React from "react";
import { hp } from "@/utils/dimensions";

const FeeSummaryRow = ({
  title,
  selected,
  bgColor,
  total,
  style,
}: {
  title: string;
  selected: string;
  bgColor?: boolean;
  total?: boolean;
  style?: StyleProp<ViewStyle>;
}) => {
  return (
    <View
      style={[
        styles.summaryRow,
        {
          backgroundColor: bgColor ? "#F9F9F9" : "",
        },
        style,
      ]}
    >
      <Text style={{ color: total ? "#DB3A07" : "#646464" }}>{title}</Text>
      <Text style={{ color: total ? "#DB3A07" : "#202020" }}>{selected}</Text>
    </View>
  );
};

export default FeeSummaryRow;

const styles = StyleSheet.create({
  summaryRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: hp(19),
    gap: hp(12),
  },
});
