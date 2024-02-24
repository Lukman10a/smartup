import { Text, View, StyleSheet, SafeAreaView } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const TuitionContainer = () => {
  return (
    <View style={styles.tuitionContainer}>
      <Ionicons
        name="chevron-back"
        size={24}
        color="black"
        style={styles.icon}
      />
      <Text style={styles.headerText}>Add tuition fee</Text>
    </View>
  );
};

export default TuitionContainer;

const styles = StyleSheet.create({
  tuitionContainer: {
    marginBottom: 60,
    flexDirection: "row",
    // justifyContent: "center",
    alignItems: "center",
  },
  headerText: {
    fontSize: 18,
    alignSelf: "center",
  },
  icon: {
    alignSelf: "flex-start",
  },
});
