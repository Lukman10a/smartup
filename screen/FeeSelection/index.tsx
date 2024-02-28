import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import Notes from "@/share/Notes";
import TuitionContainer from "@/share/TuitionContainer";
import DETAILS_DATA from "@/data";
import { SafeAreaView } from "react-native-safe-area-context";
import Details from "@/share/Details";
import Button from "@/share/Button";
import { useNavigation } from "@react-navigation/native";
import { hp } from "@/utils/dimensions";
import PaymentStructure from "@/share/paymentStructure";

export interface Installment {
  type: number;
  name: string;
  breakdown: string[];
}

interface Payment {
  title: string;
  installments: Installment[];
}

const payment: Payment = {
  title: "Payment Structure",
  installments: [
    { type: 1, name: "One-time payment", breakdown: ["₦100,000.00"] },
    {
      type: 2,
      name: "2 installment payments",
      breakdown: ["₦30,000.00", "₦50,000.00"],
    },
    {
      type: 3,
      name: "3 installment payments",
      breakdown: ["₦20,000.00", "₦30,000.00", "₦50,000.00"],
    },
  ],
};

const details = DETAILS_DATA.map((item) => (
  <View key={item.title}>
    <Details title={item.title} options={item.dropdown} />
  </View>
));

const FeeSelection = () => {
  const navigation = useNavigation<FeeScreenNavigationProp>();

  const handlePress = () => {
    return navigation.navigate("FeeSummary");
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={{}} showsVerticalScrollIndicator={false}>
        <TuitionContainer title="Add tuition fee" />
        <View style={{ paddingVertical: 15 }}>
          <Text style={{ color: "#7A8289" }}>
            Please fill in the details below to add a new fee
          </Text>
        </View>
        {details}
        <PaymentStructure
          title={payment.title}
          options={payment.installments}
        />
        <Notes />
        <Button handlePress={handlePress} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default FeeSelection;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: hp(20),
    backgroundColor: "#fff",
  },
});
