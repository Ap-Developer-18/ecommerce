import { createSlice } from "@reduxjs/toolkit";

const ProductSlice = createSlice({
  name: "ProductSlice",
  // INITIAL VALUE OF STATE
  initialState: {
    products: [],
    loading: false,
  },
  // WE CAN SAY SECOND FUNCTIONAL VALUE
  reducers: {
    // JO DATA INITIAL STATE MAIN RKHNA HAI WO YHA SE JATA HAI
    addProducts(state, action) {
      state.products = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
  },
});

export default ProductSlice;

// WE CAN DISPATCH OUR DATA FROM THIS ACTION AND IT STORE IN INITIAL STATE
export const { addProducts, setLoading } = ProductSlice.actions;
