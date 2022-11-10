// import { useState } from "react";
import { useContext } from "react";
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from "react-native";
import SalesContext from "../../../SalesContext";
import { useSalesContextMethods } from "../../../SalesContext";

export default function SalesRenderedList(props) {
  // const { salesData } = useContext(SalesContext);
  // console.log(salesData);
  // const [sales, setSales] = useState(props.data);

  const { deleteSales } = useSalesContextMethods();
  const { sales } = useContext(SalesContext);
  //////////////////////////////////////////////////////

  return (
    <View>
      <FlatList
        keyExtractor={(item) => item.id.toString()}
        data={sales}
        renderItem={({ item }) => (
          <View>
            <View style={styles.row}>
              <Text style={styles.itemName}>
                {item.id}: {item.name}
              </Text>
              <TouchableOpacity onPress={() => deleteSales(item.id)} style={styles.button}>
                <Text>X</Text>
              </TouchableOpacity>
            </View>
            <Text style={styles.itemInfo}>
              {item.quantity}x R{item.salePrice} on {item.date}
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
    margin: 10,
    fontSize: 35,
    padding: 2,
    borderRadius: 10,
    height: 50,
    paddingLeft: 10,
  },
  itemInfo: {
    margin: 3,
    fontSize: 25,
    marginLeft: 35,
    marginBottom: 30,
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
    backgroundColor: "#fff",
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#777",
    borderWidth: 1,
    // marginLeft: 20,
  },
});
