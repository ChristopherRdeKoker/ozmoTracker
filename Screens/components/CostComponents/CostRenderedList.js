import { useContext, useCallback, useState } from "react";
import { View, Text, FlatList, StyleSheet, Button, TouchableOpacity } from "react-native";
// import { TouchableOpacity } from "react-native-gesture-handler";
import CostContext from "../../../CostContext";
import { useCostContextMethods } from "../../../CostContext";
// import { deleteExpense } from "../../../CostContext";
export default function CostRenderedList() {
  const { deleteCost } = useCostContextMethods();
  const { costs } = useContext(CostContext);
  // console.log(costs);

  // const [, updateState] = useState();
  // const forceUpdate = useCallback(() => updateState({}), []);

  // const newDelfunc = function (id) {
  //   deleteCost(id);
  //   // forceUpdate();
  // };
  ////⭐ finish delete process
  // const deleteCost = async function (id) {
  //   const results = await deleteExpense(id);
  //   return setCosts(results);
  // };
  //////////////////////////////////////////////////////

  return (
    <View>
      <FlatList
        keyExtractor={(item) => item.id.toString()}
        data={costs}
        renderItem={({ item }) => (
          <View>
            <View style={styles.row}>
              <Text style={styles.itemName}>
                {item.id} : {item.name}
              </Text>
              <TouchableOpacity onPress={() => deleteCost(item.id)} style={styles.button}>
                <Text>X</Text>
              </TouchableOpacity>
            </View>
            <Text style={styles.itemInfo}>
              {item.quantity} x R{item.costPrice ?? 0} on ({item.date})
            </Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  itemName: {
    backgroundColor: "#acdfdd",
    margin: 3,
    fontSize: 21,
    fontWeight: "bold",
    padding: 2,
    borderRadius: 10,
    height: 40,
    paddingLeft: 8,
    flexGrow: 1,
  },
  itemInfo: {
    // marginTop: 2,
    fontSize: 20,
    marginLeft: 35,
    marginBottom: 10,
  },
  row: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    flexGrow: 1,
    alignItems: "center",
    width: "100%",
    padding: 8,
  },
  button: {
    width: 50,
    height: 50,
    // backgroundColor: "#fff",
    backgroundColor: "#ADD8E6",

    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#777",
    borderWidth: 1,
    // marginLeft: 20,
  },
});
