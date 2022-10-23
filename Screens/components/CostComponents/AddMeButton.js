import { StyleSheet, TouchableOpacity, Text, View } from "react-native";

export default function AddMeButton(props) {
  return (
    <TouchableOpacity onPress={props.click}>
      <View>
        <Text>Add new Expense</Text>
      </View>
    </TouchableOpacity>
  );
}
