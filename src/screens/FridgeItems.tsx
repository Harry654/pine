import { SafeAreaView, ScrollView, TouchableOpacity, Text } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";
import { FridgeScreenNavigationProp } from "../nav_types";

export default function FridgeItems() {
  const navigation = useNavigation<FridgeScreenNavigationProp>();
  return (
    <SafeAreaView className="w-full flex-1 bg-gray-100">
      <ScrollView className="w-full flex-1 bg-gray-100"></ScrollView>
    </SafeAreaView>
  );
}
