import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios"


const initialState = {
    loading: false,
    data: [],
    error: ""
}

export const fetchNewData = createAsyncThunk('newLaptops/fetchNewData', async () => {

    const response = await axios.get("https://major-backend-sc1v.onrender.com/newlaptop/all")
    if (response.data.message === 'FETCH_SUCCESS') {
        return response.data.details;
    }
})

export const filterNewLaptopData = createAsyncThunk('newLaptops/filterNewLaptopData', async (filterArray) => {
    const response = await axios.post("https://major-backend-sc1v.onrender.com/newlaptop/filter", { filter: filterArray })
    if (response.data.message === 'FILTER_SUCCESS') {
        return response.data.details;
    }
})

const newLaptops = createSlice({
    name: 'newLaptops',
    initialState,
    extraReducers: builder => {
        builder.addCase(fetchNewData.pending, state => {
            state.loading = true;
        })
        builder.addCase(fetchNewData.fulfilled, (state, action) => {
            state.loading = false;
            state.data = action.payload;
            state.error = ''
        })
        builder.addCase(fetchNewData.rejected, (state, action) => {

            state.loading = false;
            state.data = [];
            state.error = action.error?.message
        })
        builder.addCase(filterNewLaptopData.pending, state => {
            state.loading = true;
        })
        builder.addCase(filterNewLaptopData.fulfilled, (state, action) => {
            state.loading = false;
            state.data = action.payload;
            state.error = ''
        })
        builder.addCase(filterNewLaptopData.rejected, (state, action) => {
            state.loading = false;
            state.data = [];
            state.error = action.error?.message
        })

    }
})

export default newLaptops.reducer;
