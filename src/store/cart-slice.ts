import { uiActions } from "./ui-slice";
import {
  AnyAction,
  Dispatch,
  PayloadAction,
  ThunkAction,
  createSlice,
} from "@reduxjs/toolkit";

export interface Item {
  id: string;
  name: string;
  quantity?: number;
  price: number;
  description?: string;
  totalPrice?: number;
}

export interface CartSliceState {
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

export const sendCartData = (
  cart: CartSliceState
): ThunkAction<void, unknown, unknown, AnyAction> => {
  return async (dispatch: Dispatch) => {
    dispatch(
      uiActions.showNotification({
        status: "pending",
        title: "Sending...",
        message: "Sending cart data!",
      })
    );

    const sendRequest = async () => {
      const response = await fetch(
        "https://learn-react-57b3c-default-rtdb.firebaseio.com/cart.json",
        {
          method: "PUT",
          body: JSON.stringify(cart),
        }
      );

      if (!response.ok) {
        throw new Error("Sending card data failed!");
      }
    };

    try {
      await sendRequest();

      dispatch(
        uiActions.showNotification({
          status: "success",
          title: "Success!",
          message: "Sent cart data successfully",
        })
      );
    } catch (error) {
      dispatch(
        uiActions.showNotification({
          status: "error",
          title: "Error!",
          message: "Sending cart data failed",
        })
      );
    }
  };
};

export default cartSlice;
export const cartActions = cartSlice.actions;
