import { StyleSheet, Text, View } from "react-native";
import { useState } from "react";
import CostButton from "./components/HomeComponents/CostButton";
import SalesButton from "./components/HomeComponents/SalesButton";
import InventoryButton from "./components/HomeComponents/InventoryButton";
import { CostDATA } from "../DATA";
import { SalesData } from "../DATA";

export default function HomePage({ navigation }) {
  ////Navigation
  const clickMeSecond = () => {
    navigation.navigate("Second");
  };

  const clickMeThird = () => {
    navigation.navigate("Third");
  };
  ///// DataState

  /////////////////////////////////////////////////
  return (
    <View style={styles.container}>
      <Text style={styles.dummyText}>Ozmo Tracker</Text>
      <View>
        <CostButton click={clickMeSecond} Parentdata={CostDATA} />
      </View>
      <SalesButton click={clickMeThird} />
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
    paddingTop: 80,
  },
  dummyText: {
    borderWidth: 4,
    backgroundColor: "#89CFF0",
    padding: 22,
    width: 350,
    borderRadius: 20,
    fontSize: 25,
    marginVertical: 20,
    marginBottom: 80,
    textAlign: "center",
  },
});
