import { ScrollView } from "react-native";
import Sections from "../components/Sections";
import MyLists from "../components/MyLists";

export default function HomeScreen() {
  return (
    <ScrollView className="w-full flex-1 bg-gray-100">
      <Sections />
      <MyLists />
    </ScrollView>
  );
}
