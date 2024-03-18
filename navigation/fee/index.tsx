import FeeCheckout from "@/screen/FeeCheckout";
import FeeSelection from "@/screen/FeeSelection";
import FeeSummary from "@/screen/FeeSummary";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

const FeeStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="FeeSelection" component={FeeSelection} />
      <Stack.Screen name="FeeSummary" component={FeeSummary} />
      <Stack.Screen name="FeeCheckout" component={FeeCheckout} />
    </Stack.Navigator>
  );
};

export default FeeStack;
