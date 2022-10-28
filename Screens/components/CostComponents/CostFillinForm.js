import { StyleSheet, TouchableOpacity, Text, View, TextInput } from "react-native";

export default function CostFillinForm() {
  let marioInfo = {};

  return (
    <View style={styles.container}>
      {/* <Text>1234</Text> */}
      <TextInput
        style={styles.inputText}
        placeholder="Type product name here"
        onChange={(val) => {
          marioInfo.name = val;
        }}
      ></TextInput>
      <TextInput
        style={styles.inputNum}
        placeholder="Price (ZAR)"
        onChangeText={(val) => {
          console.log(marioInfo.name + val);
        }}
        keyboardType="phone-pad"
      ></TextInput>
      <TextInput
        style={styles.inputNum}
        keyboardType="phone-pad"
        placeholder="Quantity"
        // onChangeText={() => {
        //   console.log(marioInfo.name + val);
        // }}
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
