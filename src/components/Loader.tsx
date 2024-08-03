import React from "react";
import { Text, View } from "react-native";
// import Spinner from "react-native-spinkit";

interface Props {
  isVisible: boolean;
}

const Loader: React.FC<Props> = ({ isVisible }) => {
  return (
    <View
      className="flex-1 flex justify-center items-center"
      style={{ display: isVisible ? "flex" : "none" }}
    >
      <Text>Loading...</Text>
      {/* <Spinner isVisible={isVisible} size={50} type={"Wave"} color={"#0000ff"} /> */}
    </View>
  );
};

export default Loader;
