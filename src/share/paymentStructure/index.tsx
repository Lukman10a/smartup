import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { Entypo } from "@expo/vector-icons";
import { useEffect, useState } from "react";
import Dropdown from "./DropDown";
import {
  Installment,
  addBreakdownItem,
  editBreakdownItem,
  paymentSelector,
  removeBreakdownItem,
} from "@/redux/installmentSlice";
import { useDispatch, useSelector } from "react-redux";
import InstallmentCard from "./installmentCard";
import AddBreakdownModal from "./AddBreakdown";

const PaymentStructure = ({
  title,
  options,
}: {
  title: string;
  options: Installment[];
}) => {
  const dispatch = useDispatch();
  const payment = useSelector(paymentSelector);
  const [isClicked, setIsClicked] = useState(false);
  const [selectedItem, setSelectedItem] = useState<{
    name: string;
    type: number;
  }>();
  const [selectedBreakdown, setSelectedBreakdown] = useState<Installment[]>();
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleSelectedOption = (type: number, name: string) => {
    setSelectedItem({ name, type });
    setSelectedBreakdown(
      payment.installments.filter((installment) => {
        return installment.type === type;
      })
    );
    setIsClicked(!isClicked);
  };

  const handleIconClick = () => {
    setIsClicked(!isClicked);
  };

  // Access payment state from Redux store
  const handleAddBreakdownItem = (
    type: number,
    breakdownItem: { name: string; amount: string; date: string; id: string }
  ) => {
    dispatch(addBreakdownItem({ type, breakdownItem }));
    // Update the selectedBreakdown state to include the newly added breakdown item
    // setSelectedBreakdown((prevSelectedBreakdown) => {
    //   const updatedBreakdown = prevSelectedBreakdown
    //     ? [...prevSelectedBreakdown]
    //     : [];
    //   const installment = payment.installments.find(
    //     (inst) => inst.type === type
    //   );
    //   if (installment) {
    //     const updatedInstallment = {
    //       ...installment,
    //       breakdown: [...installment.breakdown, breakdownItem],
    //     };
    //     const index = updatedBreakdown.findIndex((inst) => inst.type === type);
    //     if (index !== -1) {
    //       updatedBreakdown[index] = updatedInstallment;
    //     } else {
    //       updatedBreakdown.push(updatedInstallment);
    //     }
    //   }
    //   return updatedBreakdown;
    // });
  };

  const handleEditBreakdown = (
    type: number,
    breakdownId: string,
    updatedBreakdownItem: {
      name: string;
      amount: string;
      date: string;
      id: string;
    }
  ) => {
    dispatch(
      editBreakdownItem({
        type,
        breakdownId,
        updatedBreakdownItem,
      })
    );
  };

  const handleRemoveBreakdown = (type: number, breakdownId: string) => {
    dispatch(removeBreakdownItem({ type, breakdownId }));
  };

  const toggleModal = (installmentIndex: number | null = null) => {
    setIsModalVisible(!isModalVisible);
  };

  useEffect(() => {
    if (selectedItem) {
      setSelectedBreakdown(
        payment.installments.filter((installment) => {
          return installment.type === selectedItem.type;
        })
      );
    }
  }, [payment.installments, selectedItem]);

  return (
    <View>
      <View>
        <View style={styles.detailContainer}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <View style={{ gap: 8 }}>
              {!selectedItem && (
                <Text style={[styles.detailText]}>{payment.title}</Text>
              )}
              {selectedItem && (
                <Text style={styles.selecteOption}>{selectedItem.name}</Text>
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
              {selectedBreakdown?.map((installment, index) =>
                installment.breakdown.map((breakdown, index) => (
                  <InstallmentCard
                    key={index}
                    name={breakdown.name}
                    date={breakdown.date}
                    amount={breakdown.amount}
                  />
                ))
              )}
              <TouchableOpacity
                style={styles.addInstallmentCta}
                onPress={() => toggleModal(selectedItem.type)}
              >
                <Text style={{ color: "#DC3500" }}>
                  Add a new associated fee
                </Text>
                <Entypo name="plus" size={22} color="#DC3500" />
              </TouchableOpacity>
            </View>
          )}
        </View>

        {isClicked ? (
          <Dropdown
            handleSelected={handleSelectedOption}
            selectedItem={selectedItem?.name!}
            options={options}
          />
        ) : null}

        <AddBreakdownModal
          visible={isModalVisible}
          onClose={() => toggleModal(null)}
          type={selectedItem?.type !== null ? selectedItem?.type : undefined}
        />
      </View>
    </View>
  );
};

export default PaymentStructure;

const styles = StyleSheet.create({
  detailContainer: {
    backgroundColor: "#F1F1F1",
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

  addInstallmentCta: {
    borderWidth: 1,
    borderStyle: "dashed",
    borderColor: "#DC3500",
    borderRadius: 6,
    padding: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});
