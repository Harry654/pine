import React, { useState } from "react";
import { View, TextInput, Button, Text } from "react-native";
// import DateTimePicker from '@react-native-community/datetimepicker';
// import { Picker } from '@react-native-picker/picker';
import ImageUploader from "./ImageUploader";
import { IPantryItem } from "../types";
// import { t } from 'react-native-tailwindcss';

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

  const updateState = (prop: string, value: string | number | Date) => {
      setNewItem((prevNewItem) => ({ ...prevNewItem, [prop]: value }));
      console.log(prop, value);
  };
  const handleImagePicked = (uri: string) => {
    updateState("image_url", uri);
  };

  const handleSubmit = () => {
    // Send newItem to API endpoint
    console.log(newItem);
  };

  return (
    <View className="p-4">
      <TextInput
        className="border p-2 rounded mb-4"
        placeholder="Name of item"
        value={newItem.name}
        onChangeText={(e) => updateState("name", e)}
      />
      <TextInput
        className="border p-2 rounded mb-4"
        placeholder="Quantity"
        value={newItem.quantity.toString()}
        onChangeText={(e) => updateState("quantity", parseInt(e))}
        keyboardType="numeric"
      />
      {/* <View style={[t.border, t.rounded, t.mb4]}>
        <Picker
          selectedValue={quantityUnit}
          onValueChange={(itemValue) => setQuantityUnit(itemValue as string)}
        >
          <Picker.Item label="Pieces" value="pieces" />
          <Picker.Item label="Kilograms" value="kg" />
          <Picker.Item label="Liters" value="liters" />
        </Picker>
      </View> */}
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
      <TextInput
        className="border p-2 rounded mb-4 h-24"
        placeholder="Notes"
        value={newItem.notes}
        onChangeText={(e) => updateState("notes", e)}
        multiline
      />
      <ImageUploader onImagePicked={handleImagePicked} />
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
      <Button title="Add Item" onPress={handleSubmit} />
    </View>
  );
};

export default NewItemForm;
