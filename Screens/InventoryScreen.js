import React from "react";
import { StyleSheet, TouchableOpacity, Text, View, Modal } from "react-native";
import { costData } from "../costData"; //is needed?
import CostContext from "../CostContext";
export default function InventoryScreen() {
  return (
    <View style={styles.container}>
      <Text>Hey Ho Inventory screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F33A6A",
    // borderWidth: 2,
    // borderColor: "#ccc",
    height: "100%",
    alignItems: "center",
    paddingTop: 40,

    justifyContent: "flex-start",
  },
  addMeButtonContainer: {
    height: 150,
    width: "70%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FFC0CB",
    borderColor: "#28282B",
    borderWidth: 4,
    marginVertical: 10,
    borderRadius: 150,
    // paddingTop: 40,
    marginBottom: 40,
  },

  renderedListContainer: {
    flex: 1,
    borderWidth: 4,
    minHeight: 200,
    width: "97%",
    minWidth: "95%",
    backgroundColor: "#89CFF0",
    borderColor: "#28282B",
    borderRadius: 10,
    marginBottom: 20,
  },
});
