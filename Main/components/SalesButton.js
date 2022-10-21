import { StyleSheet, TouchableOpacity, Text, View } from "react-native";

export default function SalesButton() {
  return (
    <TouchableOpacity>
      <View style={styles.button}>
        <Text style={styles.textButton}>Sales</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#228B22",
    borderRadius: 38,
    height: 100,
    width: 250,
    borderColor: "black",
    borderWidth: 4,
    justifyContent: "center",
    alignContent: "center",
    marginTop: 30,
  },
  textButton: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 30,
  },
});
