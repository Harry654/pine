import React from "react";
import { Text, View } from "react-native";
import { sections } from "../constants/sections";
import SectionItem from "./SectionItem";

const Sections = () => {
  return (
    <View className="w-full flex-row flex-wrap justify-center">
      {sections.map((sectionItem, index) => (
        <SectionItem key={index} sectionItem={sectionItem} />
      ))}
    </View>
  );
};

export default Sections;
