import { SafeAreaView, ScrollView, TouchableOpacity, View } from "react-native";
import NewItemForm from "../components/NewItemForm";

export default function AddItemScreen() {
  return (
    <SafeAreaView className="w-full flex-1 bg-gray-100">
      <ScrollView className="w-full flex-1 bg-gray-100">
        <NewItemForm />
      </ScrollView>
    </SafeAreaView>
  );
}
