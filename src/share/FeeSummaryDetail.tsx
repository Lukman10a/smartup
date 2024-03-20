import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { hp } from "@/utils/dimensions";
import FeeSummaryRow from "./FeeSummaryRow";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { isOdd } from "@/utils";

interface SelectedOptions {
  [key: string]: string;
}

const FeeSummaryDetail = ({ total }: { total?: boolean }) => {
  const selectedOptions = useSelector(
    (state: RootState) => state.selectedOptions
  ) as SelectedOptions;

  return (
    <View style={styles.container}>
      {Object.entries(selectedOptions).map(([title, option], index) => (
        <FeeSummaryRow
          key={title}
          title={title}
          selected={option}
          bgColor={isOdd(index + 1)}
        />
      ))}
      {total && <FeeSummaryRow title="VAT" selected="₦1,500.00" />}
      {total && (
        <FeeSummaryRow
          title="Total"
          selected="₦41,000.00"
          bgColor={true}
          total={total}
        />
      )}
    </View>
  );
};

export default FeeSummaryDetail;

const styles = StyleSheet.create({
  container: {
    borderWidth: 0.7,
    borderColor: "#F9F9F9",
    borderRadius: 8,
    overflow: "hidden",
  },
  summaryRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: hp(19),
  },
});
