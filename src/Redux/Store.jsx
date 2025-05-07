import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./ProductSlice.jsx";
import cartSlice from "./CartSlice.jsx";

const store = configureStore({
    reducer:{
      product : productSlice, 
      cart: cartSlice,
    }
})
export default store;