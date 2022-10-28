import { StyleSheet, TouchableOpacity, Text, View, TextInput } from "react-native";
import { useState } from "react";

export default function CostFillinForm() {
  const [name, setName] = useState("");
  const [costPrice, setCostPrice] = useState("");
  const [quantity, setQuantity] = useState("");
  // console.log(quantity);

  return (
    <View style={styles.container}>
      {/* <Text>1234</Text> */}
      <TextInput
        style={styles.inputText}
        placeholder="Type product name here"
        onChangeText={(val) => setName(val)}
      ></TextInput>
      <TextInput
        style={styles.inputNum}
        placeholder="Price (ZAR)"
        onChangeText={(val) => setCostPrice(val)}
        keyboardType="phone-pad"
      ></TextInput>
      <TextInput
        style={styles.inputNum}
        keyboardType="phone-pad"
        placeholder="Quantity"
        onChangeText={(val) => setQuantity(val)}
      ></TextInput>
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
    // backgroundColor: "#DABFF2",
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
});
