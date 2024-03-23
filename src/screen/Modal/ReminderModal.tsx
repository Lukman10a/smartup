import { hp } from "@/utils/dimensions";
import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { modalStyles } from "./styles";

export default function ReminderModal({ onClose }: { onClose: () => void }) {
  const [visible, setVisible] = React.useState(false);

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);
  return (
    <View style={modalStyles.centerContainer}>
      <Text style={modalStyles.title}>Send reminder</Text>
      <Text style={modalStyles.subTitle}>
        Your message will be sent to the student’s email address.{" "}
      </Text>

      <TextInput
        placeholder="Type in your message here..."
        style={styles.input}
      />

      <View style={styles.actionbuttons}>
        <TouchableOpacity style={styles.reminderButton} onPress={onClose}>
          <Text style={styles.reminderText}>Send reminder</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    backgroundColor: "#F1F1F166",
    borderRadius: hp(10),
    padding: hp(10),
    paddingBottom: hp(70),
    marginBottom: hp(26),
  },
  actionbuttons: {},
  reminderButton: {
    backgroundColor: "#DB3A07",
    padding: hp(16),
    paddingHorizontal: hp(24),
    borderRadius: hp(8),
  },
  reminderText: {
    color: "white",
    textAlign: "center",
  },
});
