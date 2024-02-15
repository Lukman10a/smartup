import { Text, View, StyleSheet, SafeAreaView } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const TuitionContainer = () => {
  return (
    <SafeAreaView style={styles.TuitionContainer}>
      <Ionicons
        name="chevron-back"
        size={24}
        color="black"
        style={styles.Icon}
      />
      <Text style={styles.HeaderText}>Add tuition fee</Text>
    </SafeAreaView>
  );
};

export default TuitionContainer;

const styles = StyleSheet.create({
  TuitionContainer: {
    margin: 80,
    marginTop: 60,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  HeaderText: {
    fontSize: 18,
  },
  Icon: {
    alignSelf: "flex-start",
  },
});
