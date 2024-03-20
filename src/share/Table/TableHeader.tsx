import { StyleSheet, Text, View } from "react-native";
import { hp } from "@/utils/dimensions";

const TableHeader = () => (
  <View style={styles.tableRow}>
    <View style={{ alignItems: "flex-start" }}>
      <Text style={{ fontSize: hp(16), color: "black", fontWeight: "500" }}>
        Id
      </Text>
    </View>
    <View style={{ alignItems: "flex-start" }}>
      <Text style={{ fontSize: hp(16), color: "black", fontWeight: "500" }}>
        Student name
      </Text>
    </View>
    <View style={{ alignItems: "flex-start" }}>
      <Text style={{ fontSize: hp(16), color: "black", fontWeight: "500" }}>
        Amount
      </Text>
    </View>
    <View style={{ alignItems: "flex-start" }}>
      <Text style={{ fontSize: hp(16), color: "black", fontWeight: "500" }}>
        Date
      </Text>
    </View>
  </View>
);

export default TableHeader;

const styles = StyleSheet.create({
  tableRow: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: "#E4E4E4",
    paddingVertical: 10,
    gap: hp(15),
    alignItems: "flex-start",
    justifyContent: "space-between",
  },
});
