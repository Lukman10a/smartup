import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { Entypo } from "@expo/vector-icons";
import { useState } from "react";
import DropdownDetail from "./DropdownDetail";

const Details = ({ title, options }: { title: string; options?: object }) => {
  const [data, setData] = useState(title);
  const [isClicked, setIsClicked] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const handleSelectedOption = (item) => {
    setSelectedItem(item);
    setIsClicked(!isClicked);
    console.log({ options, item, title });
  };

  const handleIconClick = () => {
    setIsClicked(!isClicked);
  };

  return (
    <SafeAreaView>
      <View style={styles.detailContainer}>
        <View style={{ gap: 8 }}>
          <Text style={[styles.detailText]}>{data}</Text>
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
      {isClicked ? (
        <DropdownDetail
          handleSelected={handleSelectedOption}
          selectedItem={selectedItem}
          options={options}
        />
      ) : null}
    </SafeAreaView>
  );
};

export default Details;

const styles = StyleSheet.create({
  detailContainer: {
    backgroundColor: "#F1F1F1",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 16,
    borderRadius: 8,
    marginVertical: 4,
  },
  detailText: {
    fontSize: 14,
    fontWeight: "400",
    color: "#646464",
  },
  selecteOption: {},
});
