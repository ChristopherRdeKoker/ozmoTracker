import { StyleSheet, TouchableOpacity, Text, View, FlatList } from "react-native";
import { ForceTouchGestureHandler } from "react-native-gesture-handler";
import { useCostContext } from "../../../CostContext";
import { useSalesContext } from "../../../SalesContext";

import { filterArrays } from "../../../utils";
import { addCostsReduceArr } from "../../../utils";
import { addSalesReduceArr } from "../../../utils";

export default function InventoryTable() {
  const { costs } = useCostContext(); //iterate by name then reduce to add numbers
  const { sales } = useSalesContext();

  const names = [
    "Blinding Shine Shampoo",
    "Blinding Shine Conditioner",
    "Deep Moisturing Shampoo",
    "Deep Moisturing Conditioner",
    "Color Save Shampoo",
    "Color Save Conditioner",
    "Silverising Shampoo",
    "Intensive Deep Repair Mask",
    "Blinding Shine Definer",
  ];

  const inventory = Object.fromEntries(names.sort((a, b) => a.localeCompare(b)).map((i) => [i, 0]));

  costs.forEach(({ name, quantity }) => {
    inventory[name] = +inventory[name] + +quantity;
  });

  sales.forEach(({ name, quantity }) => {
    inventory[name] = +inventory[name] - +quantity;
  });
  /// Object.fromEntries pairs with Object.entries

  const nameData = Object.entries(inventory).map(([k, v]) => {
    return { key: k, value: +v };
  });

  return (
    <View style={styles.main}>
      <View style={styles.table}>
        <FlatList
          data={nameData}
          renderItem={({ item }) => {
            return (
              <View style={styles.row}>
                <Text style={styles.key}>{item.key}</Text>
                <Text style={styles.value}>{item.value}</Text>
              </View>
            );
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    width: "95%",
    height: 0,
    marginLeft: "5%",
    marginRight: "5%",
    marginTop: 10,
    marginBottom: 20,
    // height: 300,

    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  table: {
    flex: 1,
    marginTop: 5,
    // marginEnd: 5,

    borderWidth: 3,
    backgroundColor: "#FFD558",

    borderColor: "black",
    // minHeight: 350,
    // height: 400,
    width: "95%",
    borderRadius: 10,
    height: 80,
    paddingEnd: 10,
  },
  row: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    // flexGrow: 1,
    alignItems: "space-between",
    width: "100%",
    padding: 10,
    paddingRight: 15,

    // marginTop: 15,
    borderBottomWidth: 2,
    borderColor: "black",
    marginTop: 5,
    margin: 7,
    paddingRight: 20,
    backgroundColor: "#FFE87C",
    borderRadius: 10,
    // paddingRight: 5,

    // marginRight: 22,
    // maxHeight: "auto",
  },
  key: {
    fontWeight: "bold",
    fontSize: 20,
    color: "#36454F",
  },
  value: {
    fontWeight: "bold",
    fontSize: 20,
    marginRight: 15,
    marginEnd: 10,
  },
});
