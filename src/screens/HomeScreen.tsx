import { SafeAreaView, ScrollView, TouchableOpacity, View } from "react-native";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import Sections from "../components/Sections";
import MyLists from "../components/MyLists";


export default function HomeScreen() {

  return (
    <SafeAreaView className="w-full flex-1 bg-gray-100">
      <ScrollView className="w-full flex-1 bg-gray-100">
        <View className="h-10 flex flex-row justify-end items-center px-5 mb-3">
          <TouchableOpacity>
            <FontAwesome6 name="add" size={24} color="blue" />
          </TouchableOpacity>
        </View>

        <Sections />
        <MyLists />
      </ScrollView>
    </SafeAreaView>
  );
}
