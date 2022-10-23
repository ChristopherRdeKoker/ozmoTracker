import { View, Text } from "react-native";
import List from "./List";
export default function CostRenderedList(props) {
  const { data } = props;

  // const currentMonth = new Date().getMonth() + 1;
  // const currentYear = new Date().getFullYear();
  //////////////////////////////////////////////////////

  return (
    <View>
      <Text>Testing List 123</Text>
      <Text>Testing List 123</Text>

      <Text>Testing List 123</Text>
      <List />
    </View>
  );
}
