import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from '@reduxjs/toolkit'


export interface flagTypes {
    sidebarFlag: boolean,
    ProductPopUpFlag: boolean
}

const initialState: flagTypes = {
    sidebarFlag: false,
    ProductPopUpFlag: false

};

const flagSlice = createSlice({
    name: 'flags',
    initialState,
    reducers: {
        setSidebarFlag(state, action: PayloadAction<boolean>) { // method
            state.sidebarFlag = action.payload
        },
        setProductPopUpFlag(state, action: PayloadAction<boolean>) { // method
            state.ProductPopUpFlag = action.payload
        }
    }
});

export const { setSidebarFlag, setProductPopUpFlag } = flagSlice.actions

export default flagSlice.reducer