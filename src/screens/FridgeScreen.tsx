import { SafeAreaView, ScrollView, TouchableOpacity, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FridgeScreenNavigationProp } from "../nav_types";
import FridgeContent from "../components/FridgeContent";

export default function FridgeScreen() {
  const navigation = useNavigation<FridgeScreenNavigationProp>();
  return <FridgeContent />;
}
