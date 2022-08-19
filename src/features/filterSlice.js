import { createSlice } from '@reduxjs/toolkit';

export const filterSlice = createSlice({
    name: "filter",
    initialState: {
        value: '',
    },
    reducers: {
        setFilter(state, action) {
            state.value = action.payload;
        },
    },
});

export const ReducerFilter = filterSlice.reducer;

export const { setFilter } = filterSlice.actions;

export const getFilter = state => state.filter.value;