import { View, Text, StyleSheet } from "react-native";
import React from "react";
import FeeSummaryDetail from "@/share/FeeSummaryDetail";
import { SafeAreaView } from "react-native-safe-area-context";
import TuitionContainer from "@/share/TuitionContainer";
import Button from "@/share/Button";
import { useNavigation } from "@react-navigation/native";
import SecondaryCta from "@/share/SecondaryCta";
import { hp } from "@/utils/dimensions";

export default function FeeSummary() {
  const navigation = useNavigation<FeeScreenNavigationProp>();

  const handlePress = () => {
    return navigation.navigate("FeeCheckout");
  };
  const handleEdit = () => {
    return navigation.navigate("FeeSelection");
  };

  return (
    <SafeAreaView style={styles.container}>
      <TuitionContainer title="Summary" />
      <Text style={{ color: "#7A8289" }}>
        Here is a summary of your fee schedule.
      </Text>
      <FeeSummaryDetail />
      <View style={{ gap: hp(15) }}>
        <Button handlePress={handlePress} />
        <SecondaryCta handlePress={handleEdit} text="Edit" />
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
