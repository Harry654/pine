import React, { useContext, useEffect, useState } from "react";
import { ScrollView, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { HomeScreenNavigationProp } from "../nav_types";
import FridgeItem from "./FridgeItem";
import { fetchItems } from "../firebase/fetch";
import { IPantryItems } from "../types";
import Loader from "./Loader";
import { PantryContext } from "../context/PantryContext";

const FridgeContent = () => {
  const navigation = useNavigation<HomeScreenNavigationProp>();

  const { items: fridgeItems, loading } = useContext(PantryContext);

  return (
    <ScrollView className="w-full flex-1 rounded-sm shadow-lg">
      <Loader isVisible={loading} />
      {!loading && (
        <View>
          {fridgeItems.map((item, index) => (
            <FridgeItem key={index} item={item} />
          ))}
          {fridgeItems.length === 0 && (
            <View className="flex justify-center items-center">
              <Text>Nothing Found</Text>
            </View>
          )}
        </View>
      )}
    </ScrollView>
  );
};

export default FridgeContent;
