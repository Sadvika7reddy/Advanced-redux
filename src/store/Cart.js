import { createSlice } from "@reduxjs/toolkit";
const cartSlice=createSlice({
    name:"cart",
    initialState:{cartisVisible:false},
    reducers:{
        toggle(state){
            state.cartisVisible=!state.cartisVisible
        }
    }
})
export  const cartAction=cartSlice.actions;
export default cartSlice;