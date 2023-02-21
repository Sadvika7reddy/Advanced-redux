import { configureStore,createSlice } from "@reduxjs/toolkit";
import cartSlice from "./Cart";
const store=configureStore({
    reducer:{ui:cartSlice.reducer}
})
export default store;