import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";
import { hp } from "@/utils/dimensions";
import PaymentDetail from "@/share/PaymentDetail";
import Button from "@/share/PrimaryButton";
import { PAYMENT_DETAILS, PAYMENT_HISTORY } from "@/data";
import TableButton from "@/share/TableButton";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import AppDataTable from "@/share/DataTable";
import CustomModal from "../Modal";
import PaymentDetailsModal from "../Modal/PaymentDetailsModal";
import { Portal, Provider } from "react-native-paper";
import PaymentSummary from "../PaymentSummary";

export default function StudentPayment() {
  const [tableType, setTableType] = useState<
    "Pending payments" | "Payment history"
  >("Pending payments");
  const [showPaymentSummary, setShowPaymentSummary] = useState(false);
  const navigation = useNavigation<PaymentStackNavigationProp>();
  const [selectedPayments, setSelectedPayments] = useState(
    PAYMENT_DETAILS.map(() => false)
  );
  const [modalType, setModalType] = useState<"paymentDetails">();
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handlePayment = () => {
    setShowPaymentSummary(true);
  };

  const handleSelectPayment = (index: number) => {
    setSelectedPayments((prev) => {
      const newSelectedPayments = [...prev];
      newSelectedPayments[index] = !newSelectedPayments[index];
      return newSelectedPayments;
    });
  };

  const handleModalClose = () => {
    setIsModalVisible(false);
    setTableType("Payment history");
  };

  const handleCheckout = () => {
    return navigation.navigate("FeeSummary");
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

  const isPayAllActive =
    selectedPayments.filter((selected) => selected).length > 2;

  return (
    <Provider>
      <Portal>
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
          <TableButton
            tableTypes={[
              { type: "Pending payments", label: "Pending payments" },
              { type: "Payment history", label: "Payment history" },
            ]}
            activeTableType={tableType}
            setTableType={setTableType}
          />
          {tableType === "Pending payments" && (
            <View style={{ flex: 1 }}>
              {!showPaymentSummary ? (
                <>
                  <ScrollView style={{}} showsVerticalScrollIndicator={false}>
                    {paymentDetails}
                  </ScrollView>
                  <View
                    style={{
                      paddingHorizontal: hp(20),
                      marginVertical: hp(30),
                    }}
                  >
                    <Button
                      text="Pay All"
                      handlePress={handlePayment}
                      disabled={!isPayAllActive}
                      color={isPayAllActive ? "#DB3A07" : "#DB3A0766"}
                    />
                  </View>
                </>
              ) : (
                <ScrollView>
                  <PaymentSummary
                    handleCheckout={handleCheckout}
                    handleEdit={() => setShowPaymentSummary(false)}
                  />
                </ScrollView>
              )}
            </View>
          )}

          {tableType === "Payment history" && (
            <View style={{ padding: hp(15), height: "auto", flex: 1 }}>
              <AppDataTable
                headerItems={[
                  { name: "Id", value: "id" },
                  { name: "Payment Type", value: "paymentType" },
                  { name: "Amount", value: "amount" },
                  { name: "Status", value: "status" },
                ]}
                tableOptions={
                  <TouchableOpacity
                    onPress={() => {
                      setModalType("paymentDetails");
                      setIsModalVisible(true);
                    }}
                  >
                    <Text style={{ padding: 10 }}>View details</Text>
                  </TouchableOpacity>
                }
                showOptions={tableType === "Payment history" && true}
                items={PAYMENT_HISTORY}
              />
            </View>
          )}

          {isModalVisible && (
            <CustomModal
              visible={isModalVisible}
              showModal={() => setIsModalVisible(true)}
              hideModal={handleModalClose}
            >
              {modalType === "paymentDetails" && (
                <PaymentDetailsModal onClose={handleModalClose} />
              )}
            </CustomModal>
          )}
        </SafeAreaView>
      </Portal>
    </Provider>
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
