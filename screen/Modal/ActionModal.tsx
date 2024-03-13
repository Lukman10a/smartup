import { hp } from "@/utils/dimensions";
import * as React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { Modal, Portal, Text, Button, PaperProvider } from "react-native-paper";
import CustomModal from ".";
import { modalStyles } from "./styles";

const Index = ({ onClose }: { onClose: () => void }) => {
  const [visible, setVisible] = React.useState(false);

  const showModal = () => setVisible(true);

  return (
    <View style={modalStyles.centerContainer}>
      <Text style={modalStyles.title}>Take action</Text>
      <Text style={modalStyles.subTitle}>
        Select the action you’d prefer to take
      </Text>
      <View style={styles.actionbuttons}>
        <TouchableOpacity style={styles.reminderButton} onPress={onClose}>
          <Text style={styles.reminderText}>Send reminder</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.restrictButton}>
          <Text style={styles.restrictText}>Restrict student</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Index;

const styles = StyleSheet.create({
  actionbuttons: {
    flexDirection: "row",
    gap: 4,
  },
  reminderButton: {
    backgroundColor: "#3E8E7B",
    padding: hp(16),
    paddingHorizontal: hp(24),
    borderRadius: hp(8),
    justifyContent: "center",
  },
  reminderText: {
    color: "white",
  },
  restrictButton: {
    backgroundColor: "#DB3A07",
    padding: hp(16),
    paddingHorizontal: hp(24),
    borderRadius: hp(8),
  },
  restrictText: {
    color: "white",
  },
});
