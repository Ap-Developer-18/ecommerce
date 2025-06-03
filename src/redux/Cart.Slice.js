import { createSlice } from "@reduxjs/toolkit";

export const CartSlice = createSlice({
    name: "cartSlice",
    initialState: {
        cart: []
    },
    reducers: {
        addProduct(state, action) {
            console.log("Reducer fired with:", action.payload);
            const existingProduct = state.cart.find(item => item.id === action.payload.id);
            if (existingProduct) {
                existingProduct.quantity += 1;
            } else {    
                state.cart.push({ ...action.payload, quantity: 1 });
            }
        },
        removeCart() { },
        incrementQty() { },
        decrementQty() { },
    }
})

export const { addProduct, removeCart, incrementQty, decrementQty } = CartSlice.actions;