import StudentPayment from "@/screen/StudentPayment";
import MakePaymentPage from "@/screen/MakePaymentPage";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

const PaymentStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="StudentPayment" component={StudentPayment} />
      <Stack.Screen
        name="MakePaymentPage"
        component={MakePaymentPage}
        options={{ title: "Payment" }}
      />
    </Stack.Navigator>
  );
};

export default PaymentStack;
