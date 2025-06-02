import { createSlice } from "@reduxjs/toolkit";

export const CartSlice = createSlice({
    initialState: {
        name: "cartSlice",
        cart: []
    },
    reducers: {
        addProduct(state, action) {
            state.cart.push(action.payload)
        },
        removeCart() { },
        incrementQty() { },
        decrementQty() { },
    }
})