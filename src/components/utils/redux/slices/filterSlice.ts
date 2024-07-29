import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from '@reduxjs/toolkit'


export interface StateTypes {
    categoryId: number
}

const initialState: StateTypes = {
    categoryId: 0
};

const filterSlice = createSlice({
    name: 'filters',
    initialState,
    reducers: {
        setCategoryId(state, action: PayloadAction<number>) { // method
            state.categoryId = action.payload
        }
    }
});

export const { setCategoryId } = filterSlice.actions //redusers are stored in the actions

export default filterSlice.reducer