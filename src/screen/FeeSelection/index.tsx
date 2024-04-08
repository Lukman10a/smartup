import { ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import Notes from "@/share/Notes";
import TuitionContainer from "@/share/TuitionContainer";
import DETAILS_DATA from "@/utils/data";
import { SafeAreaView } from "react-native-safe-area-context";
import Details from "@/share/Details";
import Button from "@/share/PrimaryButton";
import { useNavigation } from "@react-navigation/native";
import { hp } from "@/utils/dimensions";
import PaymentStructure from "@/share/paymentStructure";
import { paymentSelector } from "@/redux/installmentSlice";
import { useSelector } from "react-redux";

const details = DETAILS_DATA.map((item) => (
  <View key={item.title}>
    <Details title={item.title} options={item.dropdown} />
  </View>
));

const FeeSelection = () => {
  const [selectedLanguage, setSelectedLanguage] = useState();
  const navigation = useNavigation<FeeScreenNavigationProp>();
  const payment = useSelector(paymentSelector);

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
