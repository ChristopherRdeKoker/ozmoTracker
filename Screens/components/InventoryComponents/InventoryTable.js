import { StyleSheet, TouchableOpacity, Text, View, FlatList } from "react-native";
export default function InventoryTable() {
  // const data = ["Blinding Shine Shampoo", "Silverising Shampoo"];
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
              <Text style={styles.text}>
                {item.key} = {item.value}
              </Text>
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
    marginLeft: "5%",
    marginRight: "5%",

    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  table: {
    borderWidth: 3,
    backgroundColor: "#FFD558",

    borderColor: "black",
    minHeight: 400,
    height: 550,
    width: "95%",
    borderRadius: 10,
  },
  row: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    flexGrow: 1,
    alignItems: "center",
    width: "100%",
    padding: 8,
    marginTop: 15,
  },
  text: {
    fontWeight: "bold",
    fontSize: 20,
  },
});
