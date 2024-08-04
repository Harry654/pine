// src/components/AddItemHeader.tsx

import React, { useContext } from "react";
import { View, TouchableOpacity, Text } from "react-native";
import { AddItemScreenNavigationProp } from "../nav_types";
import AntDesign from "@expo/vector-icons/AntDesign";
import { PantryContext } from "../context/PantryContext";

interface CustomHeaderProps {
  navigation: AddItemScreenNavigationProp;
}

const AddItemHeader: React.FC<CustomHeaderProps> = ({ navigation }) => {
  const { addItem, newItem, clearNewItem } = useContext(PantryContext);

  const addNewItem = () => {
    addItem({ ...newItem, date_added: new Date() });
    navigation.goBack();
    clearNewItem();
  };
  return (
    <View className="bg-white h-26 py-5">
      <View className="flex flex-row justify-between items-center px-5">
        <TouchableOpacity
          className="flex flex-row items-center"
          onPress={() => navigation.goBack()}
        >
          <AntDesign name="left" size={24} color="rgba(0, 0, 255, 0.5)" />
        </TouchableOpacity>

        <Text className="font-bold text-lg">New Item</Text>

        <View className="flex flex-row items-center">
          <TouchableOpacity onPress={addNewItem}>
            <Text className="text-blue-500 text-lg">save</Text>
          </TouchableOpacity>
          {/* <TouchableOpacity onPress={() => navigation.navigate("AddItem")}>
            <MaterialCommunityIcons
              name="barcode-scan"
              size={24}
              color="rgba(0, 0, 255, 0.5)"
            />
          </TouchableOpacity> */}
        </View>
      </View>
    </View>
  );
};

export default AddItemHeader;
