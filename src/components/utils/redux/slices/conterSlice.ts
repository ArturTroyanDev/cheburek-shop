import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from '@reduxjs/toolkit'


export interface CounterTypes {
    productCount: number
}

const initialState: CounterTypes = {
    productCount: 0
};

const counterSlice = createSlice({
    name: 'counters',
    initialState,
    reducers: {
        setProductCount(state, action: PayloadAction<number>) { // method
            state.productCount = action.payload
        }
    }
});

export const { setProductCount } = counterSlice.actions //redusers are stored in the actions

export default counterSlice.reducer