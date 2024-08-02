import { SafeAreaView, ScrollView, TouchableOpacity, Text } from "react-native";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import Sections from "../components/Sections";
import MyLists from "../components/MyLists";
import SearchBar from "../components/SearchBar";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";
import { FridgeScreenNavigationProp } from "../nav_types";

export default function FridgeItems() {
  const navigation = useNavigation<FridgeScreenNavigationProp>();
  return (
    <SafeAreaView className="w-full flex-1 bg-gray-100">
      <SearchBar />
      <ScrollView className="w-full flex-1 bg-gray-100"></ScrollView>
      <TouchableOpacity
        className="mt-auto mx-auto flex flex-row items-center"
        onPress={() => navigation.navigate("AddItem")}
      >
        <Ionicons name="add-circle" size={24} color="blue" />
        <Text className="text-lg text-blue-500 ml-2">New Product</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
