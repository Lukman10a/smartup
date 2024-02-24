import { View, Text } from "react-native";
import React from "react";
import FeeSummaryDetail from "../../share/FeeSummaryDetail";

export default function FeeSummary() {
  return (
    <View>
      <Text>Here is a summary of your fee schedule.</Text>
      <FeeSummaryDetail />
    </View>
  );
}
