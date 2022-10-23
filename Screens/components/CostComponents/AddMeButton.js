import { StyleSheet, TouchableOpacity, Text, View } from "react-native";

export default function AddMeButton() {
  return (
    <TouchableOpacity>
      <View>
        <Text style={styles.addExpenseButton}>Add new Expense</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  addExpenseButton: {
    fontSize: 22,
    justifyContent: "center",
    alignItems: "center",
  },
});
