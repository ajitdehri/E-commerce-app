import { createSlice } from "@reduxjs/toolkit";
const initialState={
    items:[],
    tempItems:[],
    totalPrice:0

}
const cartSlice=createSlice({
    name:'cart',
    initialState,
    reducers:{
        addedCart(state,action){
            const existItems=state.items.find(item=>item.id===action.payload.id);
            if(existItems){
                existItems.quantity+=1;
            }
            else{
                state.items.push({...action.payload,quantity:1})

            }
            state.tempItems=[...state.items];
            state.totalPrice=state.items.reduce((sum,item)=>sum+item.price*item.quantity,0);

        },
        removeItems(state,action){
            state.items=state.items.filter(item=>item.id !== action.payload);
            state.tempItems=[...state.items];
            state.totalPrice=state.items.reduce((sum,item)=>sum+item.price*item.quantity,0);

        },
        updateItems(state,action){

            const tempItem=state.tempItems.find(item=>item.id===action.payload.id)
            if(tempItem){
               tempItem.quantity= action.payload.quantity;
            }
        },
        quantityUpdate(state,action){
            const temItem=state.tempItems.find((item)=>item.id===action.payload);
            const cartItem=state.items.find((item)=>item.id===action.payload);
            if(temItem && cartItem){
                cartItem.quantity=temItem.quantity
            }
            state.totalPrice=state.items.reduce((sum,item)=>sum+item.price*item.quantity,0);


        }

    }
})
export const {addedCart,removeItems,updateItems,quantityUpdate}=cartSlice.actions;
export default cartSlice.reducer;