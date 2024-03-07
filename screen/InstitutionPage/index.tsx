import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  Image,
  ScrollView,
} from "react-native";
import { hp } from "@/utils/dimensions";
import Dropdown from "@/share/drop";
import TableOne from "@/share/Table";

export default function InstitutionPage() {
  const [tableType, setTableType] = useState<"completed" | "outstanding">(
    "completed"
  );

  return (
    <View style={styles.container}>
      <View
        style={{
          height: hp(220),
          borderBottomEndRadius: hp(30),
          borderBottomStartRadius: hp(30),
          overflow: "hidden",
        }}
      >
        <ImageBackground
          source={require("assets/bg.png")}
          resizeMode="cover"
          style={{
            height: "100%",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image source={require("assets/badge.png")} />
          <View style={{ alignItems: "center", marginTop: 10, gap: 5 }}>
            <Text style={{ fontSize: hp(20), fontWeight: "600" }}>
              JOY-MARVY SCHOOL
            </Text>
            <Text style={{ fontSize: hp(15) }}>Learning for development</Text>
          </View>
        </ImageBackground>
      </View>
      <View style={{ paddingHorizontal: 10 }}>
        <View style={styles.paymentButtonContainer}>
          <TouchableOpacity
            style={
              tableType === "completed"
                ? styles.activeButtonContainer
                : styles.tabButtonContainer
            }
            onPress={() => setTableType("completed")}
          >
            <Text
              style={
                tableType === "completed"
                  ? styles.activeTabButtonText
                  : styles.tabButtonText
              }
            >
              Completed payments
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={
              tableType === "outstanding"
                ? styles.activeButtonContainer
                : styles.tabButtonContainer
            }
            onPress={() => setTableType("outstanding")}
          >
            <Text
              style={
                tableType === "outstanding"
                  ? styles.activeTabButtonText
                  : styles.tabButtonText
              }
            >
              Outstanding payments
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{ flexDirection: "row", marginTop: 10, gap: 20 }}>
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
            labelStyle={{ fontWeight: "400", fontSize: hp(15) }}
            containerStyle={{ flex: 2, borderWidth: 1, borderColor: "#E4E4E4" }}
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
            labelStyle={{ fontWeight: "400", fontSize: hp(15) }}
            containerStyle={{ flex: 1, borderWidth: 1, borderColor: "#E4E4E4" }}
          />
        </View>
      </View>
      <TableOne showOptions={tableType === "outstanding" && true} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffff",
  },
  paymentButtonContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: hp(40),
    paddingHorizontal: hp(20),
  },
  activeButtonContainer: {
    backgroundColor: "#DC3500",
    padding: hp(20),
    borderTopEndRadius: 10,
    borderTopStartRadius: 10,
    borderBottomWidth: 2,
    borderBottomColor: "#DC3500",
  },
  activeTabButtonText: {
    color: "#ffff",
  },
  tabButtonContainer: {
    paddingHorizontal: 25,
    padding: hp(20),
    borderBottomWidth: 2,
    borderBottomColor: "#DC3500",
  },
  tabButtonText: {
    color: "#BEBEBE",
  },
});
