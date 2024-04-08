import React, { useState } from "react";
import {
  Modal,
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { useDispatch } from "react-redux";
import { addBreakdownItem } from "@/redux/installmentSlice";
import DateTimePicker from "@react-native-community/datetimepicker";
import { hp } from "@/utils/dimensions";

interface AddBreakdownModalProps {
  visible: boolean;
  onClose: () => void;
  type: number;
}

const AddBreakdownModal: React.FC<AddBreakdownModalProps> = ({
  visible,
  onClose,
  type,
}) => {
  const [name, setName] = useState<string>("");
  const [amount, setAmount] = useState<string>("");
  const [date, setDate] = useState<Date>(new Date());
  const [showDatePicker, setShowDatePicker] = useState<boolean>(false);
  const dispatch = useDispatch();

  const handleAddBreakdown = () => {
    if (!name || !amount || !date) return;
    console.log({ date });

    const id = Math.random().toString();
    dispatch(
      addBreakdownItem({
        type,
        breakdownItem: { name, amount, date: date.toLocaleDateString(), id },
      })
    );
    setName("");
    setAmount("");
    setDate(new Date());
    onClose();
  };

  const onChange = (_event: any, selectedDate: any) => {
    const currentDate = selectedDate || date;
    setShowDatePicker(false);
    setDate(currentDate);
  };

  return (
    <Modal
      visible={visible}
      animationType="slide"
      transparent={true}
      onRequestClose={onClose}
    >
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <Text style={styles.modalTitle}>Add Breakdown Item</Text>
          <TextInput
            style={styles.input}
            placeholder="Name"
            value={name}
            onChangeText={setName}
          />
          <TextInput
            style={styles.input}
            placeholder="Amount"
            value={amount}
            onChangeText={setAmount}
          />
          <TouchableOpacity
            style={styles.datePickerContainer}
            onPress={() => setShowDatePicker(true)}
          >
            <Text style={{ fontWeight: "500", fontSize: hp(20) }}>Date:</Text>
            <Text>{date.toLocaleDateString()}</Text>
          </TouchableOpacity>
          {showDatePicker && (
            <DateTimePicker
              testID="dateTimePicker"
              value={date}
              mode="date"
              is24Hour={true}
              display="default"
              onChange={onChange}
              minimumDate={new Date()}
            />
          )}

          <TouchableOpacity
            style={styles.addButton}
            onPress={handleAddBreakdown}
          >
            <Text style={styles.buttonText}>Add</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.cancelButton} onPress={onClose}>
            <Text style={styles.buttonText}>Cancel</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 10,
    width: "80%",
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  datePickerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
  addButton: {
    backgroundColor: "#007BFF",
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
    marginBottom: 5,
  },
  cancelButton: {
    backgroundColor: "#DC3545",
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
});

export default AddBreakdownModal;
