import {
  StyleSheet,
  TouchableWithoutFeedback,
  View,
  StyleProp,
  ViewStyle,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { ReactNode } from "react";
import { hp } from "@/utils/dimensions";

type BackButtonProps = {
  children: ReactNode;
  otherStyles?: StyleProp<ViewStyle>;
};

const BackButton = ({ children, otherStyles }: BackButtonProps) => {
  const { goBack } = useNavigation();

  return (
    <TouchableWithoutFeedback onPress={() => goBack()}>
      <View style={[styles.titleContainer, otherStyles]}>
        <AntDesign name="arrowleft" size={24} color="black" />
        {children}
      </View>
    </TouchableWithoutFeedback>
  );
};

export default BackButton;

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: hp(15),
    paddingBottom: hp(30),
    textTransform: "capitalize",
  },
});
