import { configureStore } from "@reduxjs/toolkit";
import ProductSlice from "./Product.slice";

export const store = configureStore({
    reducer : {
        ProductSlice : ProductSlice.reducer,
    }
})