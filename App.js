import HomePage from "./Screens/HomePage";
import SecondScreen from "./Screens/SecondScreen";
import ThirdScreen from "./Screens/ThirdScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { CostProvider } from "./CostContext";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <CostProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={HomePage}
            options={{ title: "Welcome", headerShown: false }}
          ></Stack.Screen>
          <Stack.Screen name="Second" component={SecondScreen} options={{ title: "Add Expense" }}></Stack.Screen>
          <Stack.Screen name="Third" component={ThirdScreen} options={{ title: "Add Sales" }}></Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    </CostProvider>
  );
}
