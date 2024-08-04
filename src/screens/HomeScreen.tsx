import { ScrollView } from "react-native";
import Sections from "../components/Sections";
import MyLists from "../components/MyLists";
import RecentlyAdded from "../components/RecentlyAdded";
import Trashed from "../components/Trashed";

export default function HomeScreen() {
  return (
    <ScrollView className="w-full flex-1 bg-gray-100">
      <Sections />
      <MyLists />
      <RecentlyAdded />
      <Trashed />
    </ScrollView>
  );
}
