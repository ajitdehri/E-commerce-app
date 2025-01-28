import { configureStore } from "@reduxjs/toolkit";
import reducerItem from "./productSlice";
import cartItems from "./cartSlice";

const store =configureStore({
    reducer:{
        products:reducerItem,
        cart:cartItems
    }
})

export default store;