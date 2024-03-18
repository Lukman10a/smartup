import StudentPayment from "@/screen/StudentPayment";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

const PaymentStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="StudentPayment" component={StudentPayment} />
    </Stack.Navigator>
  );
};

export default PaymentStack;
