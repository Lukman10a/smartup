import { Text, View, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { hp } from "@/utils/dimensions";

const TuitionContainer = ({ title }: { title: string }) => {
  return (
    <View style={styles.tuitionContainer}>
      <Ionicons
        name="chevron-back"
        size={24}
        color="black"
        style={styles.icon}
      />
      <View style={{ alignItems: "center", width: "100%" }}>
        <Text style={styles.headerText}>{title}</Text>
      </View>
    </View>
  );
};

export default TuitionContainer;

const styles = StyleSheet.create({
  tuitionContainer: {
    // marginTop: hp(23),
    marginBottom: hp(30),
    flexDirection: "row",
    // justifyContent: "center",
    alignItems: "center",
  },
  headerText: {
    fontSize: hp(18),
    alignSelf: "center",
    textAlign: "center",
    fontWeight: "600",
  },
  icon: {
    alignSelf: "flex-start",
  },
});
