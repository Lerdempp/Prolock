import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./features/cartSlice"; // Cart reducer'ı import et

const store = configureStore({
  reducer: {
    cart: cartReducer, // Reducer'ı store'a ekledik
  },
});

export default store;
