import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  ScrollView,
  Image,
} from "react-native";
import { hp } from "@/utils/dimensions";
import PaymentDetail from "@/share/PaymentDetail";
import Button from "@/share/Button";
import { PAYMENT_DETAILS } from "@/data";
import TableButton from "@/share/TableButton";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import AppDataTable from "@/share/DataTable";

export default function StudentPayment() {
  const [tableType, setTableType] = useState<
    "Pending payments" | "Payment history"
  >("Pending payments");
  const navigation = useNavigation<PaymentStackNavigationProp>();
  const [selectedPayments, setSelectedPayments] = useState(
    PAYMENT_DETAILS.map(() => false)
  );

  const handlePayment = () => {
    console.log("payed");
    navigation.navigate("PaymentSummary");
  };

  const handleSelectPayment = (index: number) => {
    setSelectedPayments((prev) => {
      const newSelectedPayments = [...prev];
      newSelectedPayments[index] = !newSelectedPayments[index];
      return newSelectedPayments;
    });
  };

  const paymentDetails = PAYMENT_DETAILS.map((item, index) => (
    <View key={item.id}>
      <PaymentDetail
        title={item.title}
        price={item.price}
        onSelect={() => handleSelectPayment(index)}
        isSelected={selectedPayments[index]}
      />
    </View>
  ));

  const isPayAllActive = selectedPayments.some((selected) => selected);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.bgImageContainer}>
        <ImageBackground
          source={require("assets/pay_bg.jpg")}
          resizeMode="cover"
          style={styles.bgImage}
        ></ImageBackground>
        <Image
          source={require("@/assets/profile.png")}
          style={styles.profileImg}
        />
      </View>

      <View style={styles.title}>
        <Text style={{ fontSize: hp(18), fontWeight: "600" }}>
          OGUNSEGBE TOSIN
        </Text>
        <Text style={{ fontSize: hp(12) }}>J.S.S. 1</Text>
      </View>
      <TableButton tableType={tableType} setTableType={setTableType} />
      {tableType === "Pending payments" && (
        <View>
          <ScrollView style={{}} showsVerticalScrollIndicator={false}>
            {paymentDetails}
          </ScrollView>
          <View style={{ paddingHorizontal: hp(20), marginVertical: hp(30) }}>
            <Button
              text="Pay All"
              handlePress={handlePayment}
              disabled={!isPayAllActive}
              color={isPayAllActive ? "#DB3A07" : "#DB3A0766"}
            />
          </View>
        </View>
      )}

      {tableType === "Payment history" && (
        <View style={{ padding: hp(15), height: "auto", flex: 1 }}>
          <AppDataTable showOptions={tableType === "Payment history" && true} />
        </View>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  bgImageContainer: { marginBottom: hp(22) },
  bgImage: {
    height: hp(125),
    position: "relative",
  },
  profileImg: {
    position: "absolute",
    top: hp(108),
    left: "45%",
  },
  title: {
    alignItems: "center",
    marginTop: hp(27),
    gap: hp(7),
  },
});
