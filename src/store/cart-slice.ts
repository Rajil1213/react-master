import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface Item {
  id: string;
  name: string;
  quantity?: number;
  price: number;
  description?: string;
  totalPrice?: number;
}

interface CartSliceState {
  items: Item[];
  totalQuantity: number;
  changed: boolean;
}

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: new Array<Item>(),
    totalQuantity: 0,
    changed: false,
  },
  reducers: {
    addItemToCart(
      state: CartSliceState,
      action: PayloadAction<{ item: Item }>
    ) {
      const newItem = action.payload.item;
      const existingItem = state.items.find((item) => item.id === newItem.id);
      state.totalQuantity++;

      if (!existingItem) {
        state.items.push({
          id: newItem.id,
          price: newItem.price,
          quantity: 1,
          description: newItem.description,
          name: newItem.name,
          totalPrice: newItem.price,
        });
      } else {
        existingItem.quantity! += 1;
        existingItem.totalPrice! += existingItem.price;
      }
    },
    removeItemFromCart(
      state: CartSliceState,
      action: PayloadAction<{ id: Item["id"] }>
    ) {
      const id = action.payload.id;
      const existingItem = state.items.find((item) => item.id === id);
      state.totalQuantity--;
      state.changed = true;
      if (existingItem!.quantity === 1) {
        state.items = state.items.filter((item) => item.id !== id);
      } else {
        existingItem!.quantity!--;
        existingItem!.totalPrice! -= existingItem!.price;
      }
    },
  },
});

export default cartSlice;
export const cartActions = cartSlice.actions;
