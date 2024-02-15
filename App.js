import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import TuitionContainer from "./share/TuitionContainer";
import Details from "./share/Details";
import DETAILS_DATA from "./data";
import Button from "./share/Button";
import DropDown from "./share/DropDown";

console.log(DETAILS_DATA);

const details = DETAILS_DATA.map((item) => (
  <View key={item.title}>
    <Details title={item.title} />
  </View>
));

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <TuitionContainer />
      <View style={{ paddingVertical: 15 }}>
        <Text>Please fill in the details below to add a new fee</Text>
      </View>
      {details}
      <Button />
      <DropDown />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
});
