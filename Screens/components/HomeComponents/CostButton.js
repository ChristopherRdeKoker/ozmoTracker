import { StyleSheet, TouchableOpacity, Text, View } from "react-native";

export default function CostButton(props) {
  return (
    <TouchableOpacity onPress={props.click}>
      <View style={styles.button}>
        <Text style={styles.textButton}>Cost</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#f01d71",
    borderRadius: 30,
    height: 100,
    width: 250,
    borderColor: "black",
    borderWidth: 4,
    justifyContent: "center",
    alignContent: "center",
  },
  textButton: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 30,
  },
});
