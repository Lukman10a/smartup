import { hp } from "@/utils/dimensions";
import { StyleSheet } from "react-native";

export const modalStyles = StyleSheet.create({
  centerContainer: {
    borderRadius: hp(20),
    padding: hp(30),
    backgroundColor: "white",
  },
  title: {
    fontSize: hp(17),
    fontWeight: "600",
  },
  subTitle: {
    marginVertical: 10,
    marginBottom: hp(26),
    fontWeight: "400",
    fontSize: hp(14),
    color: "#68798A",
  },
});
