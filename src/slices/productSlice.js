import {createSlice} from '@reduxjs/toolkit';

const productSlice = createSlice({
    name: "product",
    initialState: { 
        products:[],//product array is empty at inital state
    },
    reducers: {
        addProducts : (state,action) =>{
            state.products = action.payload;
        },
    },

});

export const {addProducts} = productSlice.actions

export default productSlice.reducer;