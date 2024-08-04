// src/components/AddItemHeader.tsx

import React from "react";
import { View, TouchableOpacity, Text } from "react-native";
import { AddItemScreenNavigationProp } from "../nav_types";
import { SafeAreaView } from "react-native-safe-area-context";
import AntDesign from "@expo/vector-icons/AntDesign";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

interface CustomHeaderProps {
  navigation: AddItemScreenNavigationProp;
}

const AddItemHeader: React.FC<CustomHeaderProps> = ({ navigation }) => {
  return (
    <View className="bg-white h-26 py-5">
      <View className="flex flex-row justify-between items-center px-5">
        <TouchableOpacity
          className="flex flex-row items-center"
          onPress={() => navigation.goBack()}
        >
          <AntDesign name="left" size={24} color="rgba(0, 0, 255, 0.5)" />
        </TouchableOpacity>

        <Text className="font-bold text-xl">Add New Item</Text>

        <TouchableOpacity onPress={() => navigation.navigate("AddItem")}>
          <MaterialCommunityIcons
            name="barcode-scan"
            size={24}
            color="rgba(0, 0, 255, 0.5)"
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default AddItemHeader;
