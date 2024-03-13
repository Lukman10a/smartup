import { hp } from "@/utils/dimensions";
import * as React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { Modal, Portal, Text, Button, PaperProvider } from "react-native-paper";

const Index = () => {
  const [visible, setVisible] = React.useState(false);

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);

  return (
    <PaperProvider>
      <Portal>
        <Modal
          visible={visible}
          onDismiss={hideModal}
          contentContainerStyle={styles.containerStyle}
        >
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
        </Modal>
      </Portal>
      <Button style={{ marginTop: 30 }} onPress={showModal}>
        Show
      </Button>
    </PaperProvider>
  );
};

export default Index;

const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
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
