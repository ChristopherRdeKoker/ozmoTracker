import { StyleSheet, TouchableOpacity, Text, View, FlatList } from "react-native";
import { useCostContext } from "../../../CostContext";
import { useSalesContext } from "../../../SalesContext";
import { joinArrays } from "../../../utils";
import { addCostsReduce } from "../../../utils";
export default function InventoryTable() {
  const { costs } = useCostContext();
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

  // const x = joinArrays(names[0], costs);
  // console.log(x);
  // const costs1BBS = addCostsReduce(x);
  // console.log(costs1BBS);  //works niiiiice

  const x = joinArrays(names[8], costs);
  // console.log(x);
  const costs1BBS = addCostsReduce(x);
  console.log(costs1BBS); //works niiiiice
  //////////////////////////////////////
  const data = [
    //temp data
    { key: "Blinding Shine Shampoo", value: 2 },
    { key: "Blinding Shine Conditioner", value: 5 },
    { key: "Deep Moisturing Shampoo", value: 6 },
    { key: "Deep Moisturing Conditioner", value: 1 },
    { key: "Color Save Shampoo", value: 2 },
    { key: "Color Save Conditioner", value: 4 },
    { key: "Silverising Shampoo", value: 2 },
    { key: "Intensive Deep Repair Mask", value: 1 },
    { key: "Blinding Shine Definer", value: 7 },
  ];
  return (
    <View style={styles.main}>
      <View style={styles.table}>
        <FlatList
          data={data}
          renderItem={({ item }) => (
            <View style={styles.row}>
              <Text style={styles.key}>{item.key}</Text>
              <Text style={styles.value}>{item.value}</Text>
            </View>
          )}
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
