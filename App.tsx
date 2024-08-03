import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./src/screens/HomeScreen";
import FridgeScreen from "./src/screens/FridgeScreen";
import FreezerScreen from "./src/screens/FreezerScreen";
import ShelfScreen from "./src/screens/ShelfScreen";
import HomeScreenHeader from "./src/components/HomeScreenHeader";
import FridgeHeader from "./src/components/FridgeHeader";
import AddItemScreen from "./src/screens/AddItemScreen";

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
        <Stack.Screen
          name="Fridge"
          component={FridgeScreen}
          options={({ navigation }) => ({
            header: () => <FridgeHeader navigation={navigation} />,
          })}
        />
        <Stack.Screen name="Freezer" component={FreezerScreen} />
        <Stack.Screen name="Shelf" component={ShelfScreen} />
        <Stack.Screen
          name="AddItem"
          component={AddItemScreen}
          options={{ presentation: "modal" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
