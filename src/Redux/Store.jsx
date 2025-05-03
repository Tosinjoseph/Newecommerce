import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./ProductSlice.jsx";

const store = configureStore({
    reducer:{
      product : productSlice, 
    }
})
export default store;