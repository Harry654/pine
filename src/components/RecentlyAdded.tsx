import React, { useEffect, useState } from "react";
import { Image, ScrollView, Text, View } from "react-native";
import { pantryItems } from "../constants/pantryItems";
import { fetchItems } from "../firebase/fetch";
import { IPantryItems } from "../types";

function RecentlyAdded() {
  const [items, setItems] = useState<IPantryItems>([]);

  const loadPantryItems = async () => {
    try {
      const response = await fetchItems();
      setItems(response);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    loadPantryItems();
  }, []);

  return (
    <View className="h-64 mt-5 p-5">
      <Text className="text-black font-bold text-xl mb-5">Recently Added</Text>
      <ScrollView horizontal={true}>
        {items.map((item, index) => (
          <View
            key={index}
            className="flex justify-between border  border-gray-300 mr-5 w-36 rounded-lg p-2 shadow-lg"
          >
            <Text className="ml-auto">{"x" + item.quantity}</Text>
            <View className="flex justify-center items-center">
              <Image
                source={
                  item.image_url
                    ? { uri: item.image_url }
                    : require("../../assets/icon.png")
                }
                className="w-16 h-16 mr-2 rounded-full bg-black"
              />
              <Text className="text-lg font-bold my-2">{item.name}</Text>
              <Text className="text-sm">{item.location}</Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

export default RecentlyAdded;
