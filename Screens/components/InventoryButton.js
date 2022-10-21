import { StyleSheet, TouchableOpacity, Text, View } from "react-native";

export default function InventoryButton() {
  return (
    <TouchableOpacity>
      <View style={styles.button}>
        <Text style={styles.textButton}>Inventory</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#FFDB58",
    borderRadius: 30,
    height: 100,
    width: 250,
    borderColor: "black",
    borderWidth: 4,
    justifyContent: "center",
    alignContent: "center",
    marginTop: 30,
  },
  textButton: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 30,
  },
});
