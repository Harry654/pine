import React, { useState, useEffect } from "react";
import { View, Image, Alert, TouchableOpacity } from "react-native";
import * as ImagePicker from "expo-image-picker";
// import * as Permissions from "expo-permissions";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

interface ImageUploaderProps {
  onImagePicked: (uri: string) => void;
}

const ImageUploader: React.FC<ImageUploaderProps> = ({ onImagePicked }) => {
  const [imageUri, setImageUri] = useState<string | null>(null);

  useEffect(() => {
    (async () => {
      const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
      // if (status !== "granted") {
      //   alert("Sorry, we need camera roll permissions to make this work!");
      // }
    })();
  }, []);

  const requestCameraPermission = async () => {
    const { status } = await ImagePicker.requestCameraPermissionsAsync();
    if (status !== "granted") {
      alert("Sorry, we need camera permissions to make this work!");
    }
  };

  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      setImageUri(result.assets[0].uri);
      onImagePicked(result.assets[0].uri);
    }
  };

  const takePhoto = async () => {
    await requestCameraPermission();
    const result = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      setImageUri(result.assets[0].uri);
      onImagePicked(result.assets[0].uri);
    }
  };

  const showOptions = () => {
    Alert.alert(
      "Upload Image",
      "Choose an option",
      [
        { text: "Take Photo", onPress: takePhoto },
        { text: "Pick from Gallery", onPress: pickImage },
        { text: "Cancel", style: "cancel" },
      ],
      { cancelable: true }
    );
  };

  return (
    <View className="h-64 py-2 border border-gray-300 flex items-center justify-center">
      {imageUri ? (
        <TouchableOpacity onPress={showOptions}>
          <Image source={{ uri: imageUri }} className="w-64 h-64" />
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          className="rounded-full p-2 bg-blue-200"
          onPress={showOptions}
        >
          <MaterialIcons name="file-upload" size={50} color="white" />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default ImageUploader;
