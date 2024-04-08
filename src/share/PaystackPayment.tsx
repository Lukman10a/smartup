import React, { useRef } from "react";
import { Paystack, paystackProps } from "react-native-paystack-webview";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import { PayStackRef } from "react-native-paystack-webview/lib/types";
import { hp } from "@/utils/dimensions";

export function PaystackPayment() {
  const paystackWebViewRef = useRef<PayStackRef>(null); // Adjusted type and initialization

  return (
    <View>
      <Paystack
        paystackKey="your-public-key-here"
        billingEmail="paystackwebview@something.com"
        amount={"25000.00"}
        activityIndicatorColor="green"
        onCancel={(e) => {
          // handle response here
        }}
        onSuccess={(res) => {
          // handle response here
        }}
        ref={paystackWebViewRef} // This should now be compatible
        // autoStart={true}
      />

      <TouchableOpacity
        onPress={() => paystackWebViewRef.current?.startTransaction()}
      >
        <Text style={styles.button}>Pay with paystack</Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  button: {
    padding: 15,
    backgroundColor: "red",
    borderRadius: hp(6),
    marginVertical: hp(5),
    color: "#ffff",
  },
});
