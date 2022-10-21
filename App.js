import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.dummyText}>Ozmo Tracker</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "#ADEC19",
    backgroundColor: "#59d12b",
    alignItems: "center",
    justifyContent: "flex-start",
    paddingTop: 100,
  },
  dummyText: {
    borderWidth: 4,
    // borderColor: "#32a852",
    backgroundColor: "#ADEC19",
    padding: 22,
    borderRadius: 100 / 2,
    fontSize: 30,
  },
});
