import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  Image,
} from "react-native";
import { hp } from "@/utils/dimensions";
import Dropdown from "@/share/drop";
import AppDataTable from "@/share/DataTable";
import TableButton from "@/share/TableButton";
import CustomModal from "../Modal";
import ActionModal from "../Modal/ActionModal";
import { Portal, Provider } from "react-native-paper";
import { COMPLETED_PAYMENT } from "@/data";
import PaymentDetailsModal from "../Modal/PaymentDetailsModal";

export default function InstitutionPage() {
  const [tableType, setTableType] = useState<"completed" | "outstanding">(
    "completed"
  );
  const [modalType, setModalType] = useState<"action" | "details">();
  const [isModalVisible, setIsModalVisible] = useState(false);

  // const handleOpenModal = () => {
  //   setIsModalVisible(true);
  //   setTableType("");
  // };

  const handleModalClose = () => {
    setIsModalVisible(false);
    setTableType("outstanding");
  };

  return (
    <Provider>
      <Portal>
        <View style={styles.container}>
          <View style={styles.heroContainer}>
            <View style={styles.overlay} />
            <ImageBackground
              source={require("assets/homeBg.png")}
              resizeMode="cover"
              style={{
                height: "100%",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Image source={require("assets/badge.png")} />
              <View
                style={{
                  alignItems: "center",
                  marginTop: 10,
                  gap: 5,
                  zIndex: 2,
                }}
              >
                <Text style={{ fontSize: hp(20), fontWeight: "600" }}>
                  JOY-MARVY SCHOOL
                </Text>
                <Text style={{ fontSize: hp(15) }}>
                  Learning for development
                </Text>
              </View>
            </ImageBackground>
          </View>
          <TableButton
            tableTypes={[
              { type: "completed", label: "Completed Payments" },
              { type: "outstanding", label: "Pending Paymnets" },
            ]}
            activeTableType={tableType}
            setTableType={setTableType}
          />

          <View
            style={{
              flexDirection: "row",
              marginBottom: hp(16),
              gap: hp(20),
              paddingHorizontal: 10,
            }}
          >
            <Dropdown
              label={"2023 / 2024 Academic session"}
              data={[
                {
                  label: "2022 / 2023 Academic session",
                  value: "2022 / 2023 Academic session",
                },
                {
                  label: "2023 / 2024 Academic session",
                  value: "2023 / 2024 Academic session",
                },
              ]}
              onSelect={() => null}
              iconName={"chevron-down-outline"}
              labelStyle={{ fontWeight: "400", fontSize: hp(12) }}
              containerStyle={{
                flex: 2,
                borderWidth: 1,
                borderColor: "#E4E4E4",
              }}
            />

            <Dropdown
              label={"Term"}
              data={[
                {
                  label: "2rd Term",
                  value: "2rd Term",
                },
                {
                  label: "3rd Term",
                  value: "3rd Term",
                },
              ]}
              onSelect={() => null}
              iconName={"chevron-down-outline"}
              labelStyle={{ fontWeight: "400", fontSize: hp(12) }}
              containerStyle={{
                flex: 1,
                borderWidth: 1,
                borderColor: "#E4E4E4",
              }}
            />
          </View>
          <View
            style={{
              padding: hp(15),
              flex: 1,
              position: "relative",
            }}
          >
            <AppDataTable
              headerItems={[
                { name: "Id", value: "id" },
                { name: "Name", value: "name" },
                { name: "Amount", value: "amount" },
                { name: "Date", value: "date" },
              ]}
              showOptions={tableType === "outstanding" && true}
              items={COMPLETED_PAYMENT}
              tableOptions={
                <>
                  <TouchableOpacity
                    onPress={() => {
                      setModalType("action");
                      setIsModalVisible(true);
                    }}
                  >
                    <Text style={{ padding: 10 }}>Take Action</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => {
                      setModalType("details"), setIsModalVisible(true);
                    }}
                  >
                    <Text style={{ padding: 10 }}>View details</Text>
                  </TouchableOpacity>
                </>
              }
            />
          </View>
        </View>
        {isModalVisible && (
          <CustomModal
            visible={isModalVisible}
            showModal={() => setIsModalVisible(true)}
            hideModal={handleModalClose}
          >
            {modalType === "action" && (
              <ActionModal onClose={handleModalClose} />
            )}
            {modalType === "details" && (
              <PaymentDetailsModal onClose={handleModalClose} />
            )}
          </CustomModal>
        )}
      </Portal>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffff",
  },
  heroContainer: {
    height: hp(220),
    borderBottomEndRadius: hp(30),
    borderBottomStartRadius: hp(30),
    overflow: "hidden",
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(122, 122, 122, 0.361)",
    zIndex: 1,
  },
  paymentButtonContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: hp(40),
  },
  activeButtonContainer: {
    backgroundColor: "#DC3500",
    padding: hp(20),
    borderTopEndRadius: hp(10),
    borderTopStartRadius: hp(10),
    borderBottomWidth: 2,
    borderBottomColor: "#DC3500",
    flex: 1,
    alignItems: "center",
  },
  activeTabButtonText: {
    color: "#ffff",
    fontSize: hp(12),
  },
  tabButtonContainer: {
    paddingHorizontal: hp(25),
    padding: hp(20),
    borderBottomWidth: 2,
    borderBottomColor: "#DC3500",
    flex: 1,
    alignItems: "center",
  },
  tabButtonText: {
    color: "#BEBEBE",
    fontSize: hp(12),
  },
});
