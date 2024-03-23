import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Button,
  TouchableWithoutFeedback,
} from "react-native";
import React, { useState } from "react";

export default function Notes() {
  const [isInputVisible, setIsInputVisible] = useState(false);
  const [noteText, setNoteText] = useState("");

  const handleSubmit = () => {
    console.log("Note submitted:", noteText);
    setIsInputVisible(false);
  };

  return (
    <TouchableWithoutFeedback onPress={() => setIsInputVisible(false)}>
      <View style={styles.NoteDetailContainer}>
        <TouchableOpacity onPress={() => setIsInputVisible(!isInputVisible)}>
          <Text style={styles.detailText}>Notes</Text>
        </TouchableOpacity>
        {isInputVisible && (
          <View style={styles.inputDetailContainer}>
            <Text style={styles.noteText}>{noteText}</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter note here..."
              onChangeText={(text) => setNoteText(text)} // Update the note text state
            />
            <Button
              title="Submit"
              onPress={handleSubmit}
              color="#DC3500"
              accessibilityLabel="Submit note"
            />
          </View>
        )}
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  NoteDetailContainer: {
    backgroundColor: "#F1F1F1",
    flexDirection: "column",
    padding: 16,
    borderRadius: 8,
    marginVertical: 4,
    width: "100%",
  },
  detailText: {
    fontSize: 14,
    fontWeight: "400",
    color: "#646464",
  },
  inputDetailContainer: {
    width: "100%",
    paddingHorizontal: 6,
    borderWidth: 1,
    borderColor: "#DC3500",
    marginVertical: 10,
    borderRadius: 10,
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    backgroundColor: "#ffff",
    elevation: 5,
  },
  noteText: {
    fontSize: 16,
    fontWeight: "500",
    color: "#333",
    marginBottom: 10,
  },
  input: {
    width: "100%",
    borderBottomWidth: 1,
    borderBottomColor: "#646464",
    marginBottom: 10,
  },
  submitButton: {
    padding: 10,
    marginTop: 10,
    backgroundColor: "#DC3500",
    color: "#ffffff",
    borderRadius: 5,
  },
});
