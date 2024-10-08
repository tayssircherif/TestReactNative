import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { Product } from '../models/product';

interface ProductState {
    products: Product[];
    status: 'idle' | 'loading' | 'failed';
}

const initialState: ProductState = {
    products: [],
    status: 'idle',
};

export const fetchProducts = createAsyncThunk('products/fetchProducts', async () => {
    const response = await axios.get('https://fakestoreapi.com/products');
    return response.data;
});

const productSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchProducts.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchProducts.fulfilled, (state, action) => {
                state.status = 'idle';
                state.products = action.payload;
            })
            .addCase(fetchProducts.rejected, (state) => {
                state.status = 'failed';
            });
    },
});

export default productSlice.reducer;
