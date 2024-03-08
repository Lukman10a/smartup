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

export default function StudentPayment() {
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
    <View style={styles.container}>
      <View style={styles.bgImageContainer}>
        <ImageBackground
          source={require("assets/pay_bg.png")}
          resizeMode="cover"
          style={styles.bgImage}
        ></ImageBackground>
      </View>
      <Image
        source={require("@/assets/profile.png")}
        style={styles.profileImg}
      />
      <View style={styles.title}>
        <Text style={{ fontSize: 18, fontWeight: "600" }}>OGUNSEGBE TOSIN</Text>
        <Text>J.S.S. 1</Text>
      </View>
      <TableButton />
      <ScrollView style={{}} showsVerticalScrollIndicator={false}>
        {paymentDetails}
      </ScrollView>

      <View style={{ paddingHorizontal: 20, marginVertical: 30 }}>
        <Button
          text="Pay All"
          handlePress={handlePayment}
          disabled={!isPayAllActive}
          color={isPayAllActive ? "#DB3A07" : "#DB3A0766"}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bgImageContainer: {},
  bgImage: {
    height: hp(125),
  },
  profileImg: {
    position: "absolute",
    top: 108,
    left: 180,
  },
  title: {
    alignItems: "center",
    marginTop: 22,
  },
});
