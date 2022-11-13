import { StyleSheet, TouchableOpacity, Text, View, Modal } from "react-native";
export default function InventoryTable() {
  return (
    <View style={styles.origin}>
      <View style={styles.table}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  origin: {
    width: "90%",
    marginLeft: "5%",
    marginRight: "5%",

    // backgroundColor: "red",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  table: {
    borderWidth: 3,
    borderColor: "black",
    minHeight: 400,
    height: 550,
    width: "95%",
    borderRadius: 10,
  },
});
