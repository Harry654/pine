// src/components/HomeScreenHeader.tsx

import React from "react";
import { View, TouchableOpacity, Text } from "react-native";
import { HomeScreenNavigationProp } from "../nav_types";
import { SafeAreaView } from "react-native-safe-area-context";
import AntDesign from "@expo/vector-icons/AntDesign";

interface CustomHeaderProps {
  navigation: HomeScreenNavigationProp;
}

const HomeScreenHeader: React.FC<CustomHeaderProps> = ({ navigation }) => {
  return (
    <SafeAreaView className="border-b border-gray-300 mb-5">
      <View className="flex flex-row justify-start items-center px-5">
        <View className="w-10 h-10 bg-black mr-2 rounded-full"></View>
        <Text className="font-bold text-2xl">Hello, Harrison 👋</Text>
        <TouchableOpacity className="ml-auto">
          <AntDesign name="setting" size={24} color="blue" />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreenHeader;
