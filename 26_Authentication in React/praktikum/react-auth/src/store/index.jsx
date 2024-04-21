import { configureStore } from "@reduxjs/toolkit";
import productState from './slices/form.slice'

export const store = configureStore({
    reducer:{
        product: productState
    },
})