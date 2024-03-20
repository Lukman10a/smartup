import { hp } from "@/utils/dimensions";
import * as React from "react";
import { StyleSheet, TouchableOpacity, View, Text } from "react-native";
import { modalStyles } from "./styles";
import FeeSummaryRow from "@/share/FeeSummaryRow";
import { isOdd } from "@/utils";

const datas = [
  { title: "Fee type", value: "Tuition fee" },
  { title: "Amount", value: "₦500,000.00" },
  { title: "Vendor name", value: "Quick teller" },
  { title: "Payment type", value: "Bank transfer" },
  { title: "Status", value: "Successful" },
];

const PaymentDetailsModal = ({ onClose }: { onClose: () => void }) => {
  const [visible, setVisible] = React.useState(false);

  const showModal = () => setVisible(true);

  return (
    <View style={modalStyles.centerContainer}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: hp(16),
          borderColor: "#DADADAB2",
          borderRadius: 5,
          borderWidth: 0.5,
          backgroundColor: "#F9F9F9",
          padding: hp(14),
        }}
      >
        <Text style={modalStyles.title}>Payment details</Text>
        <Text>X</Text>
      </View>
      {datas.map((data, index) => (
        <FeeSummaryRow
          key={data.title}
          title={data.title}
          selected={data.value}
          bgColor={isOdd(index + 1)}
        />
      ))}
    </View>
  );
};

export default PaymentDetailsModal;

const styles = StyleSheet.create({
  actionbuttons: {
    flexDirection: "row",
    gap: hp(4),
  },
});
