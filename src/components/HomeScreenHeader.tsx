// src/components/HomeScreenHeader.tsx

import React from "react";
import { View, TouchableOpacity, Text } from "react-native";
import { HomeScreenNavigationProp } from "../nav_types";
import { SafeAreaView } from "react-native-safe-area-context";
import AntDesign from "@expo/vector-icons/AntDesign";
import FontAwesome from '@expo/vector-icons/FontAwesome';

interface CustomHeaderProps {
  navigation: HomeScreenNavigationProp;
}

const HomeScreenHeader: React.FC<CustomHeaderProps> = ({ navigation }) => {
  return (
    <SafeAreaView className="border-b border-gray-300 mb-5">
      <View className="flex flex-row justify-start items-center px-5">
        <FontAwesome name="user-circle-o" size={30} color="black" />
        <Text className="ml-2 font-bold text-2xl">Hello, Harrison 👋</Text>
        <TouchableOpacity className="ml-auto">
          <AntDesign name="setting" size={24} color="blue" />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreenHeader;
