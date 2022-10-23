import { StyleSheet, TouchableOpacity, Text, View, TextInput } from "react-native";

export default function SecondScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.formDetailsContainer}>
        <Text style={styles.formGreet}>Hi ho</Text>
        <TextInput> dsada</TextInput>
      </View>
      <View style={styles.renderedListContainer}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F33A6A",
    borderWidth: 2,
    borderColor: "#ccc",
    height: "100%",
    alignItems: "center",
    paddingTop: 50,

    justifyContent: "flex-start",
  },
  formDetailsContainer: {
    height: 200,
    width: "90%",
    alignItems: "center",
    justifyContent: "flex-start",
    backgroundColor: "#FFC0CB",
    borderColor: "#28282B",
    borderWidth: 4,
    marginVertical: 10,
    borderRadius: 10,
    paddingTop: 40,
  },
  formGreet: {
    fontWeight: "bold",
    fontSize: 25,
    paddingTop: 15,
  },
  renderedListContainer: {
    borderWidth: 4,
    minHeight: 200,
    minWidth: "90%",
    backgroundColor: "#89CFF0",
    borderColor: "#28282B",
    borderRadius: 10,
  },
});
