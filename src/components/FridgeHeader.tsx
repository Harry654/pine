// src/components/FridgeHeader.tsx

import React from "react";
import { View, TouchableOpacity, Text } from "react-native";
import { FridgeScreenNavigationProp } from "../nav_types";
import { SafeAreaView } from "react-native-safe-area-context";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import AntDesign from "@expo/vector-icons/AntDesign";
import SearchBar from "./SearchBar";

interface CustomHeaderProps {
  navigation: FridgeScreenNavigationProp;
}

const FridgeHeader: React.FC<CustomHeaderProps> = ({ navigation }) => {
  return (
    <SafeAreaView className="border-b border-gray-300 mb-5 h-32">
      <View className="flex flex-row justify-between items-center px-5">
        <TouchableOpacity className="flex flex-row items-center">
          <AntDesign name="left" size={24} color="rgba(0, 0, 255, 0.5)" />
        </TouchableOpacity>

        <Text className="font-bold text-xl">Fridge</Text>

        <TouchableOpacity onPress={() => navigation.navigate("AddItem")}>
          <FontAwesome6 name="add" size={24} color="rgba(0, 0, 255, 0.5)" />
        </TouchableOpacity>
      </View>
      <SearchBar />
    </SafeAreaView>
  );
};

export default FridgeHeader;
