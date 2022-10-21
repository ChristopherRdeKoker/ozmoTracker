import { StyleSheet, TouchableOpacity, Text, View, Button } from "react-native";
import CostButton from "./components/CostButton";
import SalesButton from "./components/SalesButton";
import InventoryButton from "./components/Inventory";

export default function HomePage() {
  return (
    <View style={styles.container}>
      <Text style={styles.dummyText}>Ozmo Tracker</Text>
      <CostButton />
      <SalesButton />
      <InventoryButton />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#2e8bc0",
    alignItems: "center",
    justifyContent: "flex-start",
    paddingTop: 100,
  },
  dummyText: {
    borderWidth: 4,
    backgroundColor: "#89CFF0",
    padding: 22,
    width: 350,
    borderRadius: 30,
    fontSize: 25,
    marginVertical: 20,
    marginBottom: 80,
    textAlign: "center",
  },
});
