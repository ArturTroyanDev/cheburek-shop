import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from '@reduxjs/toolkit'


export interface StateTypes {
    categoryId: number,
    currentPage: number,
}

const initialState: StateTypes = {
    categoryId: 0,
    currentPage: 1,

};

const filterSlice = createSlice({
    name: 'filters',
    initialState,
    reducers: {
        setCategoryId(state, action: PayloadAction<number>) { // method
            state.categoryId = action.payload
        },
        setCurrentPage(state, action: PayloadAction<number>) { // method
            state.currentPage = action.payload
        },
        setFilters(state, action) {
            state.categoryId = Number(action.payload.categoryId);
            state.currentPage = Number(action.payload.currentPage);
            // console.log(action)
        }
    }
});

export const { setCategoryId, setCurrentPage, setFilters } = filterSlice.actions //redusers are stored in the actions

export default filterSlice.reducer