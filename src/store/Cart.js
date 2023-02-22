import { createSlice } from "@reduxjs/toolkit";
const cartSlice=createSlice({
    name:"cart",
    initialState:{cartisVisible:false,notification:null},
    reducers:{
        toggle(state){
            state.cartisVisible=!state.cartisVisible
        },
        responses(state,action){
          state.notification={
            status:action.payload.status,
            message:action.payload.message,
            title:action.payload.title

          }  
        }
    }
})
export  const cartAction=cartSlice.actions;
export default cartSlice;