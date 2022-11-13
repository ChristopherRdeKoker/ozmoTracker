import React from "react";
import { StyleSheet, TouchableOpacity, Text, View, Modal } from "react-native";
import InventoryTable from "./components/InventoryComponents/InventoryTable";
export default function InventoryScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Count me Inventory</Text>
      <InventoryTable />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFFFC2",

    height: "100%",
    alignItems: "center",
    paddingTop: 40,

    justifyContent: "flex-start",
    flex: 1,
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
  header: {
    fontSize: 30,
    fontWeight: "bold",
  },
});
