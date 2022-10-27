// import { useState } from "react";
import { useContext } from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import SalesContext from "../../../SalesContext";

export default function SalesRenderedList() {
  const { salesData } = useContext(SalesContext);
  // console.log(salesData);
  // const [sales, setSales] = useState(props.data);

  // const currentMonth = new Date().getMonth() + 1;
  // const currentYear = new Date().getFullYear();
  //////////////////////////////////////////////////////

  return (
    <View>
      <FlatList
        keyExtractor={(item) => item.id}
        data={salesData}
        renderItem={({ item }) => (
          <View>
            <Text style={styles.itemName}>
              {item.id}: {item.name}
            </Text>
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
});
