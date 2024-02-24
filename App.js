import { StatusBar } from "expo-status-bar";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import TuitionContainer from "./share/TuitionContainer";
import Details from "./share/Details";
import DETAILS_DATA from "./data";
import Button from "./share/Button";
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import Notes from "./share/Notes";

const details = DETAILS_DATA.map((item) => (
  <View key={item.title}>
    <Details title={item.title} options={item.dropdown} />
  </View>
));

export default function App() {
  return (
    <NavigationContainer>
      <SafeAreaView style={styles.container}>
        <ScrollView style={{ backgroundColor: "#fff" }}>
          <StatusBar style="auto" />
          <TuitionContainer />
          <View style={{ paddingVertical: 15 }}>
            <Text>Please fill in the details below to add a new fee</Text>
          </View>
          {details}
          <Notes />
          <Button />
        </ScrollView>
      </SafeAreaView>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
});
