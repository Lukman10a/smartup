import { View, Text, StyleSheet } from "react-native";
import React from "react";

export default function Notes() {
  return (
    <View style={styles.NoteDetailContainer}>
      <Text style={styles.detailText}>Notes</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  NoteDetailContainer: {
    backgroundColor: "#F1F1F1",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 16,
    paddingVertical: 20,
    borderRadius: 8,
    marginVertical: 4,
  },
  detailText: {
    fontSize: 14,
    fontWeight: "400",
    color: "#646464",
  },
});
