import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { Entypo } from "@expo/vector-icons";
import { useState } from "react";
import { hp } from "@/utils/dimensions";
import { Installment } from "@/screen/FeeSelection";
import Dropdown from "./DropDown";

const PaymentStructure = ({
  title,
  options,
}: {
  title: string;
  options: Installment[];
}) => {
  const [data, setData] = useState(title);
  const [isClicked, setIsClicked] = useState(false);
  const [selectedItem, setSelectedItem] = useState<null | string>(null);
  const [selectedBreakdown, setSelectedBreakdown] = useState<string[] | null>(
    null
  );

  const handleSelectedOption = (item: string, breakdown: string[]) => {
    setSelectedItem(item);
    setSelectedBreakdown(breakdown);
    setIsClicked(!isClicked);
    console.log({ options });
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
        {selectedItem && (
          <View style={{ gap: 6 }}>
            {selectedBreakdown?.map((installment, index) => (
              <View
                style={styles.selectedInstallmentSplitContainer}
                key={installment}
              >
                <Text style={styles.detailText}>
                  {index + 1} installment payment
                </Text>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <Text>{installment}</Text>
                  <TouchableOpacity style={styles.buttonContainer}>
                    <Text style={styles.buttonText}>Edit</Text>
                  </TouchableOpacity>
                </View>
              </View>
            ))}
          </View>
        )}
      </View>

      {isClicked ? (
        <Dropdown
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
