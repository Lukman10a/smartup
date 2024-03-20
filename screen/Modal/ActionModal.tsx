import { hp } from "@/utils/dimensions";
import * as React from "react";
import { StyleSheet, TouchableOpacity, View, Text } from "react-native";
import { modalStyles } from "./styles";
import ReminderModal from "./ReminderModal";
import RestrictModal from "./RestrictModal";

const Index = ({ onClose }: { onClose: () => void }) => {
  const [visible, setVisible] = React.useState(false);
  const [modalType, setModalType] = React.useState<
    "restrict" | "reminder" | "default"
  >("default");

  const showModal = () => setVisible(true);

  return (
    <View>
      {modalType === "default" && (
        <View style={modalStyles.centerContainer}>
          <Text style={modalStyles.title}>Take action</Text>
          <Text style={modalStyles.subTitle}>
            Select the action you’d prefer to take
          </Text>
          <View style={styles.actionbuttons}>
            <TouchableOpacity
              style={styles.reminderButton}
              onPress={() => setModalType("reminder")}
            >
              <Text style={styles.reminderText}>Send reminder</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.restrictButton}
              onPress={() => setModalType("restrict")}
            >
              <Text style={styles.restrictText}>Restrict student</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
      {modalType === "reminder" && <ReminderModal onClose={onClose} />}
      {modalType === "restrict" && <RestrictModal onClose={onClose} />}
    </View>
  );
};

export default Index;

const styles = StyleSheet.create({
  actionbuttons: {
    flexDirection: "row",
    gap: hp(4),
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
