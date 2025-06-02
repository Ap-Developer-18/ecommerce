import axios from "axios";
import { addProducts, setLoading } from "./Product.slice";

export const fetchProducts = () => async (dispatch) => {
  try {
    dispatch(setLoading(true)); // Start loading
    const response = await axios.get("https://fakestoreapi.com/products");
    const data = response.data;
    dispatch(addProducts(data));
  } catch (error) {
    console.log(error);
  } finally {
    dispatch(setLoading(false)); // Stop loading
  }
};