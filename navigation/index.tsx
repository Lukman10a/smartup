import StudentPayment from "@/screen/StudentPayment";
import { createStackNavigator } from "@react-navigation/stack";
import FeeStack from "./fee";
import PaymentStack from "./payment";

const Stack = createStackNavigator();

const MainStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="StudentPage" component={StudentPayment} />
      <Stack.Screen name="FeePage" component={FeeStack} />
      <Stack.Screen name="PaymentPage" component={PaymentStack} />
    </Stack.Navigator>
  );
};

export default MainStack;
