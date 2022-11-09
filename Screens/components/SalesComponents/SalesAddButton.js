import { StyleSheet, TouchableOpacity, Text, View } from "react-native";

export default function SalesButton(props) {
  return (
    <TouchableOpacity onPress={props.onOpen}>
      <View>
        <Text style={styles.textButton}> Add Sales Here</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  textButton: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 42,
    justifyContent: "center",
    alignItems: "center",
  },
});
