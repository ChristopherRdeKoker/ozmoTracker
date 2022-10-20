import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Ozmo Tracker</Text>
      <StatusBar style="auto" />
      <Button title="Test button" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "#ADEC19",
    backgroundColor: "#59d12b",
    alignItems: "center",
    justifyContent: "center",
  },
});
