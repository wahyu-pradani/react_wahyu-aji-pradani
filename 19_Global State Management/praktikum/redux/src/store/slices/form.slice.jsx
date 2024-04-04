import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    products:[],
    newproducts:[]
}


export const formSlice = createSlice({
    name : 'products',
    initialState,
    reducers:{
        addForm: (state,action) =>{

            //state.products.push(action.payload);
             const dataProducts = [...state.products]
             dataProducts.push(action.payload);
             state.products = dataProducts;
            
            // const { payload } = action
            // const {id,product_name,category,AddPhoto,productFreshness,description,Product_Price} = payload;

            // const dataProduct = {id,product_name,category,AddPhoto,productFreshness,description,Product_Price};
            // state.products.push(dataProduct);

        },
        deleteForm: (state,action) =>{
            const newData = [...state.products]
            const indexToDelete = action.payload;
            const deleted = newData?.filter((filtered) => filtered.id !== indexToDelete);
            state.products = deleted;
            
        },
        // editform: (state,action) => {
            
        // }
    }
})

export const {addForm, deleteForm}= formSlice.actions;
export default formSlice.reducer;