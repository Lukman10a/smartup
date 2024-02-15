import { Text, View, StyleSheet, SafeAreaView } from "react-native";
import { Entypo } from "@expo/vector-icons";

const Details = (props) => {
  return (
    <SafeAreaView style={styles.detailContainer}>
      <Text style={styles.DetailText}>{props.title}</Text>
      <Entypo name="chevron-down" size={24} color="black" />
    </SafeAreaView>
  );
};

export default Details;

const styles = StyleSheet.create({
  detailContainer: {
    backgroundColor: "#F1F1F1",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 16,
    borderRadius: 8,
    marginVertical: 4,
  },
  DetailText: {
    fontSize: 14,
    fontWeight: "400",
  },
});
