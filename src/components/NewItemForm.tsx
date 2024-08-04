import React, { useState } from "react";
import { View, TextInput, Text, TouchableOpacity } from "react-native";
// import DateTimePicker from '@react-native-community/datetimepicker';
import { Picker } from "@react-native-picker/picker";
import ImageUploader from "./ImageUploader";
import { IPantryItem, QuantityUnit } from "../types";
import { Dropdown } from "react-native-element-dropdown";
import DropdownComponent from "./DropdownComponent";

const NewItemForm: React.FC = () => {
  const [newItem, setNewItem] = useState<IPantryItem>({
    name: "",
    quantity: 1,
    quantity_unit: "pieces",
    date_added: new Date(),
    expiration_date: new Date(),
    category: "dairy",
    notes: "",
    is_expired: false,
    image_url: "",
    location: "fridge",
  });
  const [showDatePicker, setShowDatePicker] = useState(false);

  const quantity_units = [
    { label: "Pieces", value: "pieces" },
    { label: "Grams", value: "grams" },
    { label: "meat", value: "kg" },
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

  const updateState = (prop: string, value: string | number | Date) => {
    if (prop === "quantity" && typeof value === "string")
      value = isNaN(parseInt(value)) ? 0 : parseInt(value);

    setNewItem((prevNewItem) => ({
      ...prevNewItem,
      [prop]: value,
    }));
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
          data={quantity_units}
          onChange={handleQuantityUnitPicked}
        />
      </View>

      <Text className="mt-3 mb-2">Category</Text>
      <View className="mb-4">
        <DropdownComponent
          label="Category"
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
      {/* <View style={[t.border, t.rounded, t.mb4]}>
        <Picker
          selectedValue={category}
          onValueChange={(itemValue) => setCategory(itemValue as string)}
        >
          <Picker.Item label="Dairy" value="dairy" />
          <Picker.Item label="Vegetables" value="vegetables" />
          <Picker.Item label="Fruits" value="fruits" />
          <Picker.Item label="Meat" value="meat" />
          <Picker.Item label="Bakery" value="bakery" />
          <Picker.Item label="Beverages" value="beverages" />
          <Picker.Item label="Grains" value="grains" />
        </Picker>
      </View> */}

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
      <TouchableOpacity
        onPress={handleSubmit}
        className="w-36 p-2 mx-auto flex items-center rounded-lg bg-blue-500"
      >
        <Text className="text-lg text-white">Add</Text>
      </TouchableOpacity>
    </View>
  );
};

export default NewItemForm;
