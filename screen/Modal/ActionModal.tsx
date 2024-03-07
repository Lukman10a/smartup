import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

export default function ActionModal() {
  return (
    <View style={styles.container}>
      <View style={styles.centerContainer}>
        <Text style={styles.title}>Take action</Text>
        <Text style={styles.subTitle}>
          Select the action you’d prefer to take
        </Text>

        <View style={styles.actionbuttons}>
          <TouchableOpacity style={styles.reminderButton}>
            <Text style={styles.reminderText}>Send reminder</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.restrictButton}>
            <Text style={styles.restrictText}>Restrict student</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "skyblue",
  },
  centerContainer: {
    borderRadius: 20,
    padding: 30,
    backgroundColor: "white",
  },
  title: {
    fontSize: 17,
    fontWeight: "600",
  },
  subTitle: {
    marginVertical: 10,
    marginBottom: 26,
    fontWeight: "400",
    fontSize: 14,
    color: "#68798A",
  },
  actionbuttons: {
    flexDirection: "row",
    gap: 4,
  },
  reminderButton: {
    backgroundColor: "#3E8E7B",
    padding: 16,
    paddingHorizontal: 24,
    borderRadius: 8,
  },
  reminderText: {
    color: "white",
  },
  restrictButton: {
    backgroundColor: "#DB3A07",
    padding: 16,
    paddingHorizontal: 24,
    borderRadius: 8,
  },
  restrictText: {
    color: "white",
  },
});
