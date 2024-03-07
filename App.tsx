import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import FeeStack from "./navigation/fee";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import ActionModal from "./screen/Modal/ActionModal";
import ReminderModal from "./screen/Modal/ReminderModal";

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      {/* <ActionModal /> */}
      <ReminderModal />
      {/* <Provider store={store}>
        <FeeStack />
      </Provider> */}
    </NavigationContainer>
  );
}
