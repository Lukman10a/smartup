import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { hp } from "@/utils/dimensions";
import FeeSummaryRow from "./FeeSummaryRow";

const FeeSummaryDetail = ({ total }: { total?: boolean }) => {
  return (
    <View style={styles.container}>
      <FeeSummaryRow title="Fee type" selected="Tuition fee" bgColor={true} />
      <FeeSummaryRow title="Class" selected="J.S.S. 3" />
      <FeeSummaryRow title="Session" selected="2023/2024" bgColor={true} />
      <FeeSummaryRow title="Session" selected="Third term" />
      <FeeSummaryRow
        title="One-time payment"
        selected="₦30,000.00"
        bgColor={true}
      />
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
