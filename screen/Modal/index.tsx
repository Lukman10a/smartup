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
    <Provider>
      <Portal>
        <Modal
          visible={visible}
          onDismiss={hideModal}
          contentContainerStyle={styles.containerStyle}
        >
          {children}
        </Modal>
      </Portal>
      <Button style={{ marginTop: 30 }} onPress={showModal}>
        Show
      </Button>
    </Provider>
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
  reminderText: {
    color: "white",
  },

  restrictText: {
    color: "white",
  },
});
