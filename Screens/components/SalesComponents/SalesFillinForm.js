import { StyleSheet, TouchableOpacity, Text, View, TextInput } from "react-native";
import { useSalesContextMethods } from "../../../SalesContext";
import { SelectList } from "react-native-dropdown-select-list";
import React, { useState } from "react";
export default function SalesFillinForm() {
  const { curriedFunction2, form, addSales, curriedList2 } = useSalesContextMethods();
  const [selected, setSelected] = useState("");
  const data = [
    { key: "1", value: "Blinding Shine Shampoo" },
    { key: "2", value: "Blinding Shine Conditioner" },
    { key: "3", value: "Deep Moisturing Shampoo" },
    { key: "4", value: "Deep Moisturing Conditioner" },
    { key: "5", value: "Color Save Shampoo" },
    { key: "6", value: "Color Save Conditioner" },
    { key: "7", value: "Silverising Shampoo" },
    { key: "8", value: "Intensive Deep Repair Mask" },
    { key: "9", value: "Blinding Shine Definer" },
  ];

  const boxStyle = {
    // backgroundColor: "red",
    fontSize: 20,
    // borderWidth: 1,
    // borderColor: "#fff",
    width: "80%",
    marginLeft: 40,
    margin: 25,
    backgroundColor: "#a8e4a0",
    height: 60,
    borderRadius: 5,
    marginTop: 100,
    paddingLeft: 55,
  };
  const dropdownList = {
    fontSize: 20,
  };

  return (
    <View>
      <View style={styles.container}>
        {/* <TextInput
          style={styles.inputText}
          placeholder="Type product name here"
          onChangeText={curriedFunction2("name")}
          value={form["name"]}
        ></TextInput> */}
        <SelectList
          boxStyles={boxStyle}
          inputStyles={dropdownList}
          //
          dropdownStyles={{
            backgroundColor: "white",
            marginHorizontal: 15,
            borderRadius: 10,
            backgroundColor: "#99e599",

            // borderWidth: 1,
            // borderColor: "red",
          }}
          dropdownItemStyles={{
            marginHorizontal: 10,
            marginBottom: 8,
            backgroundColor: "white",
            borderRadius: 10,
          }}
          dropdownTextStyles={{ fontSize: 20, color: "#696969" }}
          maxHeight={300}
          ////////////////////////////////////////////////////////////////////////////////////
          setSelected={setSelected}
          data={data}
          placeholder="Select Product"
          save="value"
          // //
          onSelect={() => curriedList2(selected.toString())}
        />
        <TextInput
          style={styles.inputNum}
          placeholder="Price Sold (ZAR)"
          keyboardType="phone-pad"
          onChangeText={curriedFunction2("salePrice")}
          value={form.salePrice}
        ></TextInput>
        <TextInput
          style={styles.inputNum}
          keyboardType="phone-pad"
          placeholder="Quantity"
          onChangeText={curriedFunction2("quantity")}
          value={form.quantity ?? ""}
        ></TextInput>
      </View>
      <View>
        <TouchableOpacity style={styles.centeredButton} onPress={addSales}>
          <Text style={styles.clickMe}>Click Add Sales Here</Text>
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
    backgroundColor: "#A3EFAB",
    // backgroundColor: "#EFA3B5",
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
