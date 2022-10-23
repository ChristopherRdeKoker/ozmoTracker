import { View, Text } from "react-native";

export default function CostRenderedList(props) {
  const { data } = props;
  //date logic:
  let currentMonth = new Date().getMonth() + 1;
  console.log(currentMonth);

  return (
    <View>
      <Text>Testing List 123</Text>
      <Text>Testing List 123</Text>

      <Text>Testing List 123</Text>
      {}
    </View>
  );
}
