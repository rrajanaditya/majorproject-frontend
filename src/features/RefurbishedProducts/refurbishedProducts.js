import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios"


const initialState = {
    loading: false,
    data: [],
    error: ""
}

export const fetchRefurbishedData = createAsyncThunk('refurbishedLaptops/fetchRefurbishedData', async () => {

    const response = await axios.get("http://localhost:5000/refurbishedlaptop/all")
    if (response.data.message === 'FETCH_SUCCESS') {
        return response.data.details;
    }
})

export const filterRefurbishedData = createAsyncThunk('refurbishedLaptops/filterRefurbishedData', async (filterArray) => {
    const response = await axios.post("http://localhost:5000/refurbishedlaptop/filter", { filter: filterArray })
    console.log(response)
    if (response.data.message === 'FILTER_SUCCESS') {
        return response.data.details;
    }
})

const refurbishedLaptops = createSlice({
    name: 'refurbishedLaptops',
    initialState,
    extraReducers: builder => {
        builder.addCase(fetchRefurbishedData.pending, state => {
            state.loading = true;
        })
        builder.addCase(fetchRefurbishedData.fulfilled, (state, action) => {
            state.loading = false;
            state.data = action.payload;
            state.error = ''
        })
        builder.addCase(fetchRefurbishedData.rejected, (state, action) => {

            state.loading = false;
            state.data = [];
            state.error = action.error?.message
        })
        builder.addCase(filterRefurbishedData.pending, state => {
            state.loading = true;
        })
        builder.addCase(filterRefurbishedData.fulfilled, (state, action) => {
            state.loading = false;
            state.data = action.payload;
            state.error = ''
        })
        builder.addCase(filterRefurbishedData.rejected, (state, action) => {
            state.loading = false;
            state.data = [];
            state.error = action.error?.message
        })

    }
})

export default refurbishedLaptops.reducer;
