import { createSlice } from "@reduxjs/toolkit";

export const CartSlice = createSlice({
  name: "cartSlice",
  initialState: {
    cart: JSON.parse(localStorage.getItem("cart") || "[]"),
  },
  reducers: {
    addProduct(state, action) {
      const existingProduct = state.cart.find(item => item.id === action.payload.id);
      if (existingProduct) {
        existingProduct.quantity += 1;
      } else {
        state.cart.push({ ...action.payload, quantity: 1 });
      }
      localStorage.setItem("cart", JSON.stringify(state.cart));
    },
    removeCart(state, action) {
      state.cart = state.cart.filter(item => item.id !== action.payload);
      localStorage.setItem("cart", JSON.stringify(state.cart));
    },
  },
});

export const { addProduct, removeCart, incrementQty, decrementQty } = CartSlice.actions;
