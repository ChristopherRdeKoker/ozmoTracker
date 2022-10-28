import { StyleSheet, TouchableOpacity, Text, View, TextInput } from "react-native";
import { useState, useContext } from "react";
import CostContext from "../../../CostContext";

export default function CostFillinForm() {
  const [name, setName] = useState("");
  const [costPrice, setCostPrice] = useState("");
  const [quantity, setQuantity] = useState("");
  // console.log(quantity);
  const { addCost } = useContext(CostContext);
  // const pushCostsToState = function (name,costPrice, quantity)
  return (
    <View>
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
      <View>
        <TouchableOpacity onPress={() => addCost("test1111", 2, 2, "10-10-10", 112211121)}>
          <Text style={styles.clickMe}>Click Add Cost Here(Hard coded atm)</Text>
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
  clickMe: {
    fontSize: 22,
    borderWidth: 3,
    borderColor: "grey",
    paddingLeft: "10%",
    width: "85%",
    marginLeft: 30,
    marginTop: 25,
    borderRadius: 10,
    // backgroundColor: "#A3EFAB",
    backgroundColor: "#EFA3B5",
    height: 70,
  },
});
