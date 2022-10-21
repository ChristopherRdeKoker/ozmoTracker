import HomePage from "./Screens/HomePage";
import SecondScreen from "./Screens/SecondScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomePage}
          options={{ title: "Welcome", headerShown: false }}
        ></Stack.Screen>
        <Stack.Screen name="Second" component={SecondScreen} options={{ title: "Expenses" }}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
