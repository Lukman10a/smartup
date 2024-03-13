import { hp } from "@/utils/dimensions";
import * as React from "react";
import { StyleSheet } from "react-native";
import { Modal, Portal, Button, Provider } from "react-native-paper";

interface ModalProps {
  children: React.ReactNode;
  visible: boolean;
  showModal: () => void;
  hideModal: () => void;
}

const CustomModal: React.FC<ModalProps> = ({
  children,
  showModal,
  hideModal,
  visible,
}) => {
  return (
    <Modal
      visible={visible}
      onDismiss={hideModal}
      style={styles.containerStyle}
      contentContainerStyle={{ paddingHorizontal: hp(20) }}
    >
      {children}
    </Modal>
  );
};

export default CustomModal;

const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
});
