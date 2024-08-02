import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./src/screens/HomeScreen";
import FridgeItems from "./src/screens/FridgeItems";
import FreezerItems from "./src/screens/FreezerItems";
import StoreItems from "./src/screens/StoreItems";
import HomeScreenHeader from "./src/components/HomeScreenHeader";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={({ navigation }) => ({
            header: () => <HomeScreenHeader navigation={navigation} />,
          })}
        />
        <Stack.Screen name="Fridge" component={FridgeItems} />
        <Stack.Screen name="Freezer" component={FreezerItems} />
        <Stack.Screen name="Store" component={StoreItems} />
        <Stack.Screen
          name="AddItem"
          component={StoreItems}
          options={{ presentation: "modal" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
