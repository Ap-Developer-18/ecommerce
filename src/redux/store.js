import { configureStore } from "@reduxjs/toolkit";
import ProductSlice from "./Product.slice";
import { CartSlice } from "./Cart.Slice";

export const store = configureStore({
    reducer: {
        ProductSlice: ProductSlice.reducer,
        CartSlice: CartSlice.reducer,
    }
})