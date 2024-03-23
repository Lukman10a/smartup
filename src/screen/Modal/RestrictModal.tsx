import { hp } from "@/utils/dimensions";
import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from "react-native";

export default function RestrictModal({ onClose }: { onClose: () => void }) {
  const [visible, setVisible] = React.useState(false);

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);
  return (
    <View style={styles.centerContainer}>
      <Text style={styles.title}>Restrict student</Text>
      <Text style={styles.subTitle}>
        Your message will be sent to the student’s email address.{" "}
      </Text>

      <TextInput
        placeholder="Type in your message here..."
        style={styles.input}
      />

      <View style={styles.actionbuttons}>
        <TouchableOpacity style={styles.reminderButton}>
          <Text style={styles.reminderText}>Restrict student</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  centerContainer: {
    borderRadius: hp(20),
    padding: 30,
    backgroundColor: "white",
  },
  title: {
    fontSize: hp(17),
    fontWeight: "600",
  },
  subTitle: {
    marginVertical: 10,
    marginBottom: 26,
    fontWeight: "400",
    fontSize: 12,
    color: "#68798A",
  },
  input: {
    backgroundColor: "#F1F1F166",
    borderRadius: 10,
    padding: 10,
    paddingBottom: 70,
    marginBottom: 26,
  },
  actionbuttons: {},
  reminderButton: {
    backgroundColor: "#DB3A07",
    padding: 16,
    paddingHorizontal: 24,
    borderRadius: 8,
  },
  reminderText: {
    color: "white",
    textAlign: "center",
  },
});
