import { StatusBar } from "expo-status-bar";
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import SectionItem from "./src/components/SectionItem";
import { ISectionItem } from "./src/types";

export default function App() {
  const sections: ISectionItem[] = [
    {
      section: "all",
      number: 9,
    },
    {
      section: "today",
      number: 0,
    },
    {
      section: "scheduled",
      number: 3,
    },
    {
      section: "expired",
      number: 0,
    },
  ];
  return (
    <SafeAreaView className="w-full flex-1 bg-gray-100">
      <ScrollView className="w-full flex-1 bg-gray-100">
        <Text>Safe Area</Text>
        <View className="w-full border border-black flex flex-row flex-wrap justify-center">
          {sections.map((sectionItem, index) => (
            <SectionItem key={index} sectionItem={sectionItem} />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
