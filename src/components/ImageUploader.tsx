import React, { useState } from "react";
import { View, Button, Image, Text } from "react-native";
import * as ImagePicker from "expo-image-picker";
// import { t } from 'react-native-tailwindcss';
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

interface ImageUploaderProps {
  onImagePicked: (uri: string) => void;
}

const ImageUploader: React.FC<ImageUploaderProps> = ({ onImagePicked }) => {
  const [imageUri, setImageUri] = useState<string | null>(null);

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

  return (
    <View className="h-64 border flex items-center justify-center">
      {imageUri && (
        <Image source={{ uri: imageUri }} className="w-48 h-48 mb-2" />
      )}
      <MaterialIcons
        name={!imageUri ? "file-upload" : "edit"}
        size={50}
        color="black"
        onPress={pickImage}
      />
    </View>
  );
};

export default ImageUploader;
