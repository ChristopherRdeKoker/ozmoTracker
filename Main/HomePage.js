import { StyleSheet, Text, View, Button } from "react-native";

export default function HomePage() {
  return (
    <View style={styles.container}>
      <Text style={styles.dummyText}>Ozmo Tracker</Text>
      <View style={{ margin: 10 }}>
        <Button title="Cost" />
      </View>
      <View style={{ margin: 10 }}>
        <Button title="Sales" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#2e8bc0",
    alignItems: "center",
    justifyContent: "flex-start",
    paddingTop: 100,
  },
  dummyText: {
    borderWidth: 4,
    backgroundColor: "#89CFF0",
    padding: 22,
    borderRadius: 100 / 2,
    fontSize: 30,
  },
});
