import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload);
    },
    increaseItem : (state, action) => {
      console.log("action", action)
      const itemIndex = state.items.findIndex(
        (item) => item.productId === action.payload.productId
      );console.log("Item Index", itemIndex)
      if(itemIndex !== -1){
        
        if(state.items[itemIndex].quantity >= 1){
          state.items[itemIndex].quantity++;
        }
        else if(state.items[itemIndex].quantity === 0){
          console.log("insideadd")
          state.items.push(action.payload);
        }
      }
    },
    removeItem: (state, action) => {
      state.items = state.items.filter((item) => item.productId !== action.payload.productId);
    },
    decreaseItem: (state, action) => {
      const itemIndex = state.items.findIndex(
        (item) => item.productId === action.payload.productId
      );
      if (itemIndex !== -1) {
        if (state.items[itemIndex].quantity > 1) {
          state.items[itemIndex].quantity--;
        } else {
          state.items = state.items.filter(
            (item) => item.productId !== action.payload.productId
          );
        }
      }
    },
  },
});
export const { addItem, removeItem, decreaseItem, increaseItem } = cartSlice.actions;
export default cartSlice.reducer;
