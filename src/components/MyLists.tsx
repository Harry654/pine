import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import SectionItem from "./SectionItem";
import { list } from "../helpers/list";
import AntDesign from "@expo/vector-icons/AntDesign";
import { useNavigation } from "@react-navigation/native";
import { HomeScreenNavigationProp } from "../nav_types";

const MyLists = () => {
  const navigation = useNavigation<HomeScreenNavigationProp>();

  return (
    <View className="mt-5 p-5">
      <Text className="text-black font-bold text-xl">My Lists</Text>
      <View className="rounded-lg bg-white mt-3">
        {list.map(({ title, number }, index) => (
          <TouchableOpacity
            key={index}
            className="p-2 flex flex-row justify-end items-center border-gray-300"
            style={{ borderBottomWidth: index < list.length - 1 ? 1 : 0 }}
            onPress={() => navigation.navigate(title)}
          >
            <Text className="capitalize text-lg mr-auto">{title}</Text>
            <Text className="capitalize text-lg opacity-50">{number}</Text>
            <AntDesign name="right" size={15} color="rgba(0, 0, 0, 0.5)" />
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

export default MyLists;
