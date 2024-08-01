import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";



const initialState = {
    data: [],
}
const productSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        
    },
    extraReducers: (builder) => {
        builder
        .addCase(getProduct.fulfilled, (state,action) => {
            state.data = action.payload
        })
    }
});

export default productSlice.reducer;

export const getProduct = createAsyncThunk('products/get', async () => {
    const data = await fetch('https://fakestoreapi.com/products')
    const result = await data.json();
    return result;

})

