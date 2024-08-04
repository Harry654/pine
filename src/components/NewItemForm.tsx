import React, { useContext, useState } from "react";
import { View, TextInput, Text, TouchableOpacity } from "react-native";
// import DateTimePicker from '@react-native-community/datetimepicker';
import { Picker } from "@react-native-picker/picker";
import ImageUploader from "./ImageUploader";
import { IPantryItem } from "../types";
import DropdownComponent from "./DropdownComponent";
import { PantryContext } from "../context/PantryContext";

const NewItemForm: React.FC = () => {
  const { newItem, updateNewItem } = useContext(PantryContext);
  const [showDatePicker, setShowDatePicker] = useState(false);

  const quantity_units = [
    { label: "Pieces", value: "pieces" },
    { label: "Grams", value: "grams" },
    { label: "Kilograms", value: "kg" },
    { label: "Liters", value: "liters" },
    { label: "Jar", value: "jar" },
    { label: "Loaves", value: "loaves" },
    { label: "Bag", value: "bag" },
    { label: "Pints", value: "pints" },
    { label: "Packs", value: "packs" },
    { label: "Cans", value: "cans" },
    { label: "Head", value: "head" },
    { label: "Pack", value: "pack" },
    { label: "Bottle", value: "bottle" },
  ];

  const categories = [
    { label: "Dairy", value: "dairy" },
    { label: "Vegetables", value: "vegetables" },
    { label: "Meat", value: "meat" },
    { label: "Beverages", value: "beverages" },
    { label: "Fruits", value: "fruits" },
    { label: "Prepared", value: "prepared" },
    { label: "Canned", value: "canned" },
    { label: "Grains", value: "grains" },
    { label: "Sread", value: "Spread" },
    { label: "Bakery", value: "bakery" },
    { label: "Dessert", value: "dessert" },
  ];
  const locations = [
    { label: "Fridge", value: "fridge" },
    { label: "Freezer", value: "freezer" },
    { label: "Store", value: "store" },
  ];

  const updateState = (prop: string, value: string | number | Date) => {
    if (prop === "quantity" && typeof value === "string")
      value = isNaN(parseInt(value)) ? 0 : parseInt(value);

    updateNewItem({ ...newItem, [prop]: value });
    console.log(prop, value);
  };

  const handleImagePicked = (uri: string) => {
    updateState("image_url", uri);
  };
  const handleQuantityUnitPicked = (unit: string) => {
    updateState("quantity_unit", unit);
  };
  const handleCategoryPicked = (category: string) => {
    updateState("category", category);
  };
  const handleLocationPicked = (location: string) => {
    updateState("location", location);
  };

  const handleSubmit = () => {
    // Send newItem to API endpoint
    console.log(newItem);
  };

  return (
    <View className="p-4 bg-white">
      <Text className="mb-2">Item Name</Text>
      <TextInput
        className="border border-gray-300 p-2 rounded mb-4"
        placeholder="Name of item"
        value={newItem.name}
        onChangeText={(e) => updateState("name", e)}
      />

      <Text className="mt-3 mb-2">Quantity</Text>
      <TextInput
        className="border border-gray-300 p-2 rounded mb-4"
        placeholder="Quantity"
        value={newItem.quantity.toString()}
        onChangeText={(e) => updateState("quantity", e)}
        keyboardType="numeric"
      />

      <Text className="mt-3 mb-2">Quantity Unit</Text>
      <View className="mb-4">
        <DropdownComponent
          label="Quantity Unit"
          value={newItem.quantity_unit}
          data={quantity_units}
          onChange={handleQuantityUnitPicked}
        />
      </View>

      <Text className="mt-3 mb-2">Category</Text>
      <View className="mb-4">
        <DropdownComponent
          label="Category"
          value={newItem.category}
          data={categories}
          onChange={handleCategoryPicked}
        />
      </View>

      <Text className="mt-3 mb-2">Upload Image</Text>
      <ImageUploader onImagePicked={handleImagePicked} />

      {/* <View style={[t.mb4]}>
        <Button title="Select Expiration Date" onPress={() => setShowDatePicker(true)} />
        {showDatePicker && (
            <DateTimePicker
            value={expirationDate}
            mode="date"
            display="default"
            onChange={(event, selectedDate) => {
              setShowDatePicker(false);
              if (selectedDate) {
                setExpirationDate(selectedDate);
              }
            }}
          />
        )}
        </View> */}

      <Text className="mt-3 mb-2">Location</Text>
      <View className="mb-4">
        <DropdownComponent
          label="Location"
          value={newItem.location}
          data={locations}
          onChange={handleLocationPicked}
        />
      </View>

      <Text className="mt-3 mb-2">Notes</Text>
      <TextInput
        className="border border-gray-300 p-2 rounded mb-4 h-24"
        placeholder={`Add notes about ${
          newItem.name ? newItem.name : "the item"
        }`}
        value={newItem.notes}
        onChangeText={(e) => updateState("notes", e)}
        multiline
      />
      {/* <View style={[t.border, t.rounded, t.mb4]}>
        <Picker
          selectedValue={location}
          onValueChange={(itemValue) => setLocation(itemValue as string)}
        >
          <Picker.Item label="Fridge" value="fridge" />
          <Picker.Item label="Freezer" value="freezer" />
          <Picker.Item label="Shelf" value="shelf" />
        </Picker>
      </View> */}
    </View>
  );
};

export default NewItemForm;
