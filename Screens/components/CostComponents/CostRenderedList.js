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
          <Text style={styles.item}>
            {item.name}: R{item.costPrice} on {item.date}
          </Text>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: "#acdfdd",
  },
});
