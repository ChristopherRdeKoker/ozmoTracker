import { StyleSheet, TouchableOpacity, Text, View, TextInput } from "react-native";

import { useCostContextMethods } from "../../../CostContext";

export default function CostFillinForm() {
  const { curriedFunction, form, addCosts } = useCostContextMethods();

  return (
    <View>
      <View style={styles.container}>
        <TextInput
          style={styles.inputText}
          placeholder="Type product name here"
          onChangeText={curriedFunction("name")}
          value={form["name"]}
        ></TextInput>
        <TextInput
          style={styles.inputNum}
          placeholder="Price (ZAR)"
          onChangeText={curriedFunction("costPrice")}
          keyboardType="phone-pad"
          value={form.costPrice}
        ></TextInput>
        <TextInput
          style={styles.inputNum}
          keyboardType="phone-pad"
          placeholder="Quantity"
          onChangeText={curriedFunction("quantity")}
          value={form.quantity ?? ""}
        ></TextInput>
      </View>
      <View>
        <TouchableOpacity style={styles.centeredButton} onPress={addCosts}>
          <Text style={styles.clickMe}>Click Add Cost Here</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // alignItems: "center",
    // justifyContent: "center",
    width: "100%",
    height: 600,
    margin: "auto",
    backgroundColor: "#252326",
  },
  inputNum: {
    borderWidth: 1,
    borderColor: "#fff",
    width: "80%",
    marginLeft: 40,
    margin: 25,
    backgroundColor: "white",
    height: 60,
    borderRadius: 5,
    paddingLeft: 120,
  },
  inputText: {
    borderWidth: 1,
    borderColor: "#fff",
    width: "80%",
    marginLeft: 40,
    margin: 25,
    backgroundColor: "white",
    height: 60,
    borderRadius: 5,
    marginTop: 100,
    paddingLeft: 80,
  },
  clickMe: {
    fontSize: 30,
    borderWidth: 3,
    borderColor: "grey",
    // paddingLeft: "10%",
    width: "85%",
    marginLeft: 15,
    marginTop: 15,
    borderRadius: 10,
    paddingLeft: 35,
    paddingTop: 15,
    // backgroundColor: "#A3EFAB",
    backgroundColor: "#EFA3B5",
    height: 70,
    alignItems: "center",
    justifyContent: "center",
  },
  centeredButton: {
    height: 180,
    // flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#5A5A5A",
  },
});
