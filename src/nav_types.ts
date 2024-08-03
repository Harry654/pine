// src/types.ts

import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';

export type RootStackParamList = {
  Home: undefined;
  Fridge: undefined;
  Freezer: undefined;
  Shelf: undefined;
  AddItem: undefined;
};

export type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;
export type FridgeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Fridge'>;
export type FreezerScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Freezer'>;
export type ShelfScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Shelf'>;
export type AddItemScreenNavigationProp = StackNavigationProp<RootStackParamList, 'AddItem'>;


export type HomeScreenRouteProp = RouteProp<RootStackParamList, 'Home'>;
export type FridgeScreenRouteProp = RouteProp<RootStackParamList, 'Fridge'>;
export type FreezerScreenRouteProp = RouteProp<RootStackParamList, 'Freezer'>;
export type ShelfScreenRouteProp = RouteProp<RootStackParamList, 'Shelf'>;
export type AddItemScreenRouteProp = RouteProp<RootStackParamList, 'AddItem'>;