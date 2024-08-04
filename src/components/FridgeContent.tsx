import React, { useEffect, useState } from "react";
import { ScrollView, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { HomeScreenNavigationProp } from "../nav_types";
import FridgeItem from "./FridgeItem";
import { fetchItems } from "../firebase/fetch";
import { IPantryItems } from "../types";
import Loader from "./Loader";

const FridgeContent = () => {
  const navigation = useNavigation<HomeScreenNavigationProp>();

  const [fridgeItems, setFridgeItems] = useState<IPantryItems>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const loadFridgeItems = async () => {
    setLoading(true);
    try {
      const response = await fetchItems("fridge");
      setFridgeItems(response);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    loadFridgeItems();
  }, []);

  return (
    <ScrollView className="w-full flex-1 rounded-sm shadow-lg">
      <Loader isVisible={loading} />
      {!loading && (
        <View>
          {fridgeItems.map((item, index) => (
            <FridgeItem key={index} item={item} />
          ))}
          {fridgeItems.length === 0 && <Text>Fridge is empty</Text>}
        </View>
      )}
    </ScrollView>
  );
};

export default FridgeContent;
