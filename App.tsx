import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./src/screens/HomeScreen";
import FridgeScreen from "./src/screens/FridgeScreen";
import FreezerScreen from "./src/screens/FreezerScreen";
import StoreScreen from "./src/screens/StoreScreen";
import HomeScreenHeader from "./src/components/HomeScreenHeader";
import FridgeHeader from "./src/components/FridgeHeader";
import AddItemScreen from "./src/screens/AddItemScreen";
import AddItemHeader from "./src/components/AddItemHeader";
import { PantryProvider } from "./src/context/PantryContext";

const Stack = createStackNavigator();

export default function App() {
  return (
    <PantryProvider>
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
          <Stack.Screen name="Store" component={StoreScreen} />
          <Stack.Screen
            name="AddItem"
            component={AddItemScreen}
            options={({ navigation }) => ({
              presentation: "modal",
              header: () => <AddItemHeader navigation={navigation} />,
            })}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </PantryProvider>
  );
}
