import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import FeeStack from "./navigation/fee";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import StudentPayment from "./screen/StudentPayment";
import PaymentStack from "./navigation/payment";
import RestrictModal from "./screen/Modal/RestrictModal";

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      <Provider store={store}>
        {/* <PaymentStack /> 
     <StudentPayment />  */}
        <FeeStack />
      </Provider>
    </NavigationContainer>
  );
}
