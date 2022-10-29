import { StyleSheet, TouchableOpacity, Text, View } from "react-native";

export default function AddMeButton(props) {
  return (
    <TouchableOpacity onPress={props.onOpen}>
      <View>
        <Text style={styles.addExpenseButton}>Add new Expense</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  addExpenseButton: {
    fontSize: 42,

    justifyContent: "center",
    alignItems: "center",
  },
});
//below is for later when wanting to add the form data
//
