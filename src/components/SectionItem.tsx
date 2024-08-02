import React from "react";
import { Text, View } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { ISectionItem } from "../types";

interface Props {
  sectionItem: ISectionItem;
}
const sectionColors: { [key: string]: string } = {
  all: "blue",
  today: "green",
  scheduled: "orange",
  expired: "red",
};

const SectionItem: React.FC<Props> = ({ sectionItem }) => {
  const getIcon = (sectionItem: string) => {
    switch (sectionItem) {
      case "all":
        return (
          <FontAwesome
            name="inbox"
            size={24}
            color={sectionColors[sectionItem]}
          />
        );
      case "today":
        return (
          <FontAwesome
            name="calendar"
            size={24}
            color={sectionColors[sectionItem]}
          />
        );
      case "scheduled":
        return (
          <FontAwesome
            name="bell"
            size={24}
            color={sectionColors[sectionItem]}
          />
        );
      case "expired":
        return (
          <AntDesign
            name="exclamationcircle"
            size={24}
            color={sectionColors[sectionItem]}
          />
        );
    }
  };
  return (
    <View className="w-[45%] rounded-md bg-white m-1 p-3">
      <View className="flex flex-row justify-between items-center">
        {getIcon(sectionItem.section)}
        <Text
          className="font-bold text-xl"
          style={{ color: sectionColors[sectionItem.section] }}
        >
          {sectionItem.number}
        </Text>
      </View>
      <Text
        className="uppercase  font-bold mt-5"
        style={{ color: sectionColors[sectionItem.section] }}
      >
        {sectionItem.section}
      </Text>
    </View>
  );
};

export default SectionItem;
