import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { IPantryItem } from "../types";
import { dateDifference } from "../utils/dateDifference";

interface Props {
  item: IPantryItem;
}

const getExpirationStatus = (
  expirationDate: Date,
  thresholdDays: number = 3
): string => {
  const now = new Date();
  const expiration = new Date(expirationDate);
  const thresholdDate = new Date();
  thresholdDate.setDate(now.getDate() + thresholdDays);

  if (expiration < now) {
    return "Expired";
  } else if (expiration <= thresholdDate) {
    return "Expires soon";
  } else {
    return "";
  }
};

const FridgeItem: React.FC<Props> = ({ item }) => {
  const imageSource = item.image_url
    ? { uri: item.image_url }
    : require("../../assets/icon.png");

  return (
    <View className="h-24 border-b border-gray-300 flex flex-row items-center px-2">
      <Image
        source={imageSource}
        className="w-20 h-20 mr-2 rounded-full bg-black"
      />
      <View className="flex-auto">
        <View className="flex flex-row justify-between items-center">
          <Text className="text-lg font-bold">{item.name}</Text>
          {getExpirationStatus(item.expiration_date) ? (
            <Text className="bg-red-300 text-white p-1 rounded-xl">{`${getExpirationStatus(
              item.expiration_date
            )} (x${item.quantity} ${item.quantity_unit})`}</Text>
          ) : (
            <Text className="bg-green-500 text-white p-1 rounded-xl">
              {"x" + item.quantity + " " + item.quantity_unit}
            </Text>
          )}
        </View>

        <View className="w-24 mt-1">
          <Text className=" text-center">
            {dateDifference(item.date_added) + " ago"}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default FridgeItem;
