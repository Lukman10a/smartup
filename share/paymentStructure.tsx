import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { Entypo } from "@expo/vector-icons";
import { useState } from "react";
import DropdownDetail from "./DropdownDetail";
import { hp } from "@/utils/dimensions";

const PaymentStructure = ({
  title,
  options,
}: {
  title: string;
  options: string[];
}) => {
  const [data, setData] = useState(title);
  const [isClicked, setIsClicked] = useState(false);
  const [selectedItem, setSelectedItem] = useState<null | string>(null);

  const handleSelectedOption = (item: any) => {
    setSelectedItem(item);
    setIsClicked(!isClicked);
    console.log({ options, item, title });
  };

  const handleIconClick = () => {
    setIsClicked(!isClicked);
  };

  return (
    <View>
      <View style={styles.detailContainer}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: 10,
          }}
        >
          <View style={{ gap: 8 }}>
            {!selectedItem && <Text style={[styles.detailText]}>{data}</Text>}
            {selectedItem && (
              <Text style={styles.selecteOption}>{selectedItem}</Text>
            )}
          </View>
          <TouchableOpacity onPress={handleIconClick}>
            {isClicked ? (
              <Entypo name="chevron-up" size={22} color="#646464" />
            ) : (
              <Entypo name="chevron-down" size={22} color="#646464" />
            )}
          </TouchableOpacity>
        </View>
        <View style={styles.selectedInstallmentSplitContainer}>
          <Text style={styles.detailText}>First installment payment</Text>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Text>₦30,000.00</Text>
            <TouchableOpacity style={styles.buttonContainer}>
              <Text style={styles.buttonText}>Edit</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      {isClicked ? (
        <DropdownDetail
          handleSelected={handleSelectedOption}
          selectedItem={selectedItem}
          options={options}
        />
      ) : null}
    </View>
  );
};

export default PaymentStructure;

const styles = StyleSheet.create({
  detailContainer: {
    backgroundColor: "#F1F1F1",
    // flexDirection: "row",
    // justifyContent: "space-between",
    // alignItems: "center",
    padding: 16,
    borderRadius: 8,
    marginVertical: 4,
  },
  detailText: {
    fontSize: 14,
    color: "#646464",
  },
  selecteOption: {
    color: "#646464",
  },
  buttonContainer: {
    backgroundColor: "#DC35001A",
    paddingHorizontal: hp(16),
    paddingVertical: hp(5),
    borderRadius: hp(6),
  },
  buttonText: {
    textAlign: "center",
    color: "#DB3A07",
    fontSize: 10,
  },
  selectedInstallmentSplitContainer: {
    backgroundColor: "white",
    borderRadius: 8,
    padding: 10,
    gap: 3,
  },
});
