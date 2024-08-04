// src/components/SearchBar.tsx

import React, { useContext } from "react";
import { View, TextInput } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { TLocation } from "../types";
import { PantryContext } from "../context/PantryContext";

interface Props {
  location: TLocation;
}

const SearchBar: React.FC<Props> = ({ location }) => {
  const { searchPantryItems, query } = useContext(PantryContext);

  const updateQuery = (q: string) => searchPantryItems(q, location);

  return (
    <View className="flex-row items-center bg-gray-200 rounded-lg px-4 py-0 m-2">
      <FontAwesome name="search" size={20} className="mr-2" color="gray" />
      <TextInput
        className="flex-1 h-10 text-gray-900 ml-2"
        placeholder="Search"
        placeholderTextColor="#999"
        value={query}
        onChangeText={updateQuery}
      />
    </View>
  );
};

export default SearchBar;
