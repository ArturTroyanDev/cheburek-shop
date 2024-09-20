import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from '@reduxjs/toolkit'


export interface flagTypes {
    sidebarFlag: boolean,
    productPopUpFlag: boolean
}

const initialState: flagTypes = {
    sidebarFlag: false,
    productPopUpFlag: false

};

const flagSlice = createSlice({
    name: 'flags',
    initialState,
    reducers: {
        toggleSidebarFlag(state, action: PayloadAction<boolean>) { // method
            state.sidebarFlag = action.payload
        },
        setProductPopUpFlag(state, action: PayloadAction<boolean>) { // method
            state.productPopUpFlag = action.payload
        }
    }
});

export const { toggleSidebarFlag, setProductPopUpFlag } = flagSlice.actions
export default flagSlice.reducer