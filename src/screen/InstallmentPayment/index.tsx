import Button from "@/share/PrimaryButton";
import FeeSummaryRow from "@/share/FeeSummaryRow";
// import { isOdd } from "@/utils";
import { hp } from "@/utils/dimensions";
import React, { useState } from "react";
import { View, Text, SafeAreaView, StyleSheet, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Checkbox } from "react-native-paper";
import { TouchableOpacity } from "react-native-gesture-handler";

const datas = [
  { title: "Tuition fee", value: "₦200,000.00" },
  { title: "W.A.E.C fee", value: "₦30,000.00" },
  { title: "Extra lesson fee", value: "₦30,000.00" },
  { title: "Online lesson fee", value: "₦30,000.00" },
  { title: "Graduation fee", value: "₦30,000.00" },
];

const installmentBreakdown = [
  {
    title: "First installment payment",
    price: "₦200,000.00",
  },
  {
    title: "Second installment payment",
    price: "₦131,500.00",
  },
  {
    title: "Third installment payment",
    price: "₦131,500.00",
  },
];
export default function InstallmentPayment({
  showTable,
}: {
  showTable: () => void;
}) {
  const navigation = useNavigation<FeeScreenNavigationProp>();

  const handleCheckout = () => {
    console.log("checkout");
    navigation.navigate("MakePaymentPage");
  };

  const [checkedItems, setCheckedItems] = useState([false, false, false]);

  const handleCheckboxPress = (index: number) => {
    const newCheckedItems = checkedItems.map((item, idx) =>
      idx === index ? !item : item
    );
    setCheckedItems(newCheckedItems);
    console.log("checked", index);
  };

  return (
    <ScrollView style={{ flex: 1 }}>
      <View
        style={{
          height: "auto",
          // backgroundColor: "white",
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <View>
            <Text>Installment payment</Text>
            <Text
              style={{
                color: "#7A8289",
                marginBottom: hp(15),
                fontSize: hp(12),
              }}
            >
              Please check out to complete your fee payment.
            </Text>
          </View>
          <TouchableOpacity
            onPress={showTable}
            style={{
              borderWidth: 1,
              borderColor: "gray",
              padding: 5,
              borderRadius: 5,
            }}
          >
            <Text>Show Table</Text>
          </TouchableOpacity>
        </View>

        <View>
          {datas.map((data, index) => (
            <FeeSummaryRow
              key={data.title}
              title={data.title}
              selected={data.value}
              //   bgColor={isOdd(index + 1)}
              // style={styles.feeSummaryStyle}
            />
          ))}
        </View>
      </View>

      <View
        style={{
          backgroundColor: "#F9F9F9",
          // padding: hp(20),
          marginTop: hp(60),
        }}
      >
        <Text>Installment payment breakdown</Text>
        {installmentBreakdown.map((item, index) => (
          <View style={styles.installmentContainer} key={item.title}>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                gap: hp(4),
              }}
            >
              <Checkbox.Android
                color="black"
                status={checkedItems[index] ? "checked" : "unchecked"}
                onPress={() => handleCheckboxPress(index)}
              />
              <Text>{item.title}</Text>
            </View>
            <View>
              <Text>{item.price}</Text>
            </View>
          </View>
        ))}
      </View>
      <View style={{ gap: hp(15), padding: hp(15) }}>
        <Button handlePress={handleCheckout} text="Check Out" />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  feeSummaryStyle: {
    backgroundColor: "#F9F9F9",
    margin: hp(4),
    borderRadius: hp(8),
  },
  installmentContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: hp(16),
    backgroundColor: "white",
    borderRadius: hp(8),
    margin: hp(4),
  },
});
