import { configureStore } from "@reduxjs/toolkit";
import productApi from "./productApi/product";

const store = configureStore({
    reducer : {
        [productApi.reducerPath] : productApi.reducer
    },
    middleware : (getDefaultMiddleware) => 
    getDefaultMiddleware().concat(productApi.middleware)
})

export default store