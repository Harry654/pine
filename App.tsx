import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./src/screens/HomeScreen";
import FridgeItems from "./src/screens/FridgeItems";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Fridge" component={FridgeItems} />
        <Stack.Screen name="Freezer" component={FridgeItems} />
        <Stack.Screen name="Store" component={FridgeItems} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
