import { createSlice } from "@reduxjs/toolkit";
const displaySlice=createSlice({
    name:"dispay",
    initialState:{
        items:[],
        totalQuantity:0
    },
    reducers:{
        addHandler(state,action){
            const newItem=action.payload
            const existingItem=state.items.find(item=>item.id===newItem.id)
            state.totalQuantity++
            if(!existingItem){
                state.items.push({
                    id:newItem.id,
                    title:newItem.title,
                    price:newItem.price,
                    totalprice:newItem.price,
                    quantity:1
                })
            }
            else{
                existingItem.quantity++;
                existingItem.totalprice=existingItem.totalprice+newItem.price
            }
        },
        removeHandler(state,action){
            const id=action.payload
            const existingItem=state.items.find(item=>item.id==id)
            state.totalQuantity--;
            if(existingItem.quantity===1){
                state.items=state.items.filter(item=>item.id!==id)
            }
            else{
                existingItem.quantity--;

            }
        }
    }
    
})
export const displayAction=displaySlice.actions
export default displaySlice;
