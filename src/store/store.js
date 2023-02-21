import { configureStore,createSlice } from "@reduxjs/toolkit";
import displaySlice from "./Dispay";
import cartSlice from "./Cart";
const store=configureStore({
    reducer:{ui:cartSlice.reducer,display:displaySlice.reducer}
})
export default store;