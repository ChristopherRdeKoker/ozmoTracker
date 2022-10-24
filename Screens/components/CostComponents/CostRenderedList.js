import { useState } from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
// import List from "./List";
export default function CostRenderedList(props) {
  const [costs, setCosts] = useState(props.data);

  // const currentMonth = new Date().getMonth() + 1;
  // const currentYear = new Date().getFullYear();
  //////////////////////////////////////////////////////

  return (
    <View>
      <FlatList
        keyExtractor={(item) => item.id}
        data={costs}
        renderItem={({ item }) => (
          <View>
            <Text style={styles.itemName}>{item.name}:</Text>
            <Text style={styles.itemInfo}>
              R{item.costPrice} on {item.date}
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
    fontSize: 28,
  },
  itemInfo: {
    margin: 3,
    fontSize: 20,
    marginLeft: 20,
    marginBottom: 30,
  },
});
