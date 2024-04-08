import Button from "@/share/PrimaryButton";
import FeeSummaryRow from "@/share/FeeSummaryRow";
import SecondaryCta from "@/share/SecondaryCta";
import { isOdd } from "@/utils";
import { hp } from "@/utils/dimensions";
import React from "react";
import { View, Text, SafeAreaView } from "react-native";
import { useNavigation } from "@react-navigation/native";

const datas = [
  { title: "Fee type", value: "Tuition fee" },
  { title: "Amount", value: "₦500,000.00" },
  { title: "Vendor name", value: "Quick teller" },
  { title: "Payment type", value: "Bank transfer" },
  { title: "Status", value: "Successful" },
  { title: "Total", value: "₦41,000.00" },
];

export default function PaymentSummary({
  handleCheckout: handleCheckoutPayment,
  handleEdit,
}: {
  handleCheckout: () => void;
  handleEdit: () => void;
}) {
  const navigation = useNavigation<FeeScreenNavigationProp>();

  const handleCheckout = () => {
    console.log("checkout");
    navigation.navigate("MakePaymentPage");
  };
  return (
    <View style={{ padding: hp(15), height: "auto", flex: 1 }}>
      <Text
        style={{ color: "#7A8289", marginBottom: hp(15), fontSize: hp(12) }}
      >
        Please check out to complete your fee payment.
      </Text>
      {datas.map((data, index) => (
        <FeeSummaryRow
          key={data.title}
          title={data.title}
          selected={data.value}
          bgColor={isOdd(index + 1)}
        />
      ))}
      <View style={{ gap: hp(15) }}>
        <Button handlePress={handleCheckout} text="Check Out" />
        <SecondaryCta handlePress={handleEdit} text="Edit" />
      </View>
    </View>
  );
}
