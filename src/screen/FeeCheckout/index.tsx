import { View, Text, StyleSheet } from "react-native";
import React from "react";
import FeeSummaryDetail from "@/share/FeeSummaryDetail";
import { SafeAreaView } from "react-native-safe-area-context";
import TuitionContainer from "@/share/TuitionContainer";
import Button from "@/share/PrimaryButton";
import { useNavigation } from "@react-navigation/native";
import SecondaryCta from "@/share/SecondaryCta";
import { hp } from "@/utils/dimensions";

export default function FeeCheckout() {
  // const navigation = useNavigation<InstitutionNavigationProp>();
  const navigation = useNavigation<PaymentStackNavigationProp>();

  const handlePress = () => {
    // return navigation.navigate("InstitutionPage");
    return navigation.navigate("StudentPayment");
  };
  const handleBack = () => {
    return navigation.navigate("FeeSummary");
  };
  return (
    <SafeAreaView style={styles.container}>
      <TuitionContainer title="Checkout" />
      <Text style={{ color: "#7A8289" }}>
        Please check out to complete your fee payment.
      </Text>
      <FeeSummaryDetail total={true} />
      <View style={{ gap: hp(15) }}>
        <Button handlePress={handlePress} text="Check Out" />
        <SecondaryCta handlePress={handleBack} text="Cancel" />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: hp(20),
    gap: hp(23),
    backgroundColor: "#fff",
  },
});
