import FeeCheckout from "@/screen/FeeCheckout";
import FeeSelection from "@/screen/FeeSelection";
import FeeSummary from "@/screen/FeeSummary";
import InstitutionPage from "@/screen/InstitutionPage";
import ReminderModal from "@/screen/Modal/ReminderModal";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

const FeeStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {/* <Stack.Screen name="ModalPage" component={ReminderModal} /> */}
      <Stack.Screen name="InstitutionPage" component={InstitutionPage} />
      <Stack.Screen name="FeeSelection" component={FeeSelection} />
      <Stack.Screen name="FeeSummary" component={FeeSummary} />
      <Stack.Screen name="FeeCheckout" component={FeeCheckout} />
    </Stack.Navigator>
  );
};

export default FeeStack;
