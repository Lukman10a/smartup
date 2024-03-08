import FeeSummary from "@/screen/FeeSummary";
import PaymentSummary from "@/screen/PaymentSummary";
import StudentPayment from "@/screen/StudentPayment";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

const PaymentStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="StudentPayment" component={StudentPayment} />
      <Stack.Screen name="PaymentSummary" component={PaymentSummary} />
    </Stack.Navigator>
  );
};

export default PaymentStack;
