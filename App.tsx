import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import FeeStack from "./navigation/fee";

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      <FeeStack />
    </NavigationContainer>
  );
}
