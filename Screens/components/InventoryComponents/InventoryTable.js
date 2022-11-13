import { StyleSheet, TouchableOpacity, Text, View, Modal } from "react-native";
export default function InventoryTable() {
  return (
    <View style={styles.main}>
      <View style={styles.table}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    width: "95%",
    marginLeft: "5%",
    marginRight: "5%",

    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  table: {
    borderWidth: 3,
    backgroundColor: "#FFD558",

    borderColor: "black",
    minHeight: 400,
    height: 550,
    width: "95%",
    borderRadius: 10,
  },
});
