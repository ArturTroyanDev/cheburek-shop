// "use client"
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from '@reduxjs/toolkit'
import { useRef } from "react";
// import { act } from "react";

export interface Item {
    id: number,
    title: string,
    price: number,
    image: string,
    count: number,
}

export interface StateTypes {
    totalPrice: number,
    totalCount: number,
    items: Item[],
}

const initialState: StateTypes = {
    totalPrice: 0,
    totalCount: 0,
    items: [],
};

// const sum = useRef(initialState.totalPrice)
// console.log(sum)

const shoppingCartSlice = createSlice({
    name: 'shoppingCart',
    initialState,
    reducers: {
        addProduct(state, action: PayloadAction<any>) { // method
            const findItem = state.items.find(obj => obj.id == action.payload.id)
            if (findItem) {
                findItem.count++
            } else {
                state.items.push({
                    ...action.payload,
                    count: 1
                })
            };
            state.totalPrice = state.items.reduce((sum, obj) => {
                return (obj.price * obj.count) + sum
            }, 0);
            state.totalCount = state.items.reduce((sum, obj) => {
                return sum + obj.count
            }, 0);
        },
        // addProduct(state, action: PayloadAction<any>) { // method
        //     state.items.push(action.payload)
        //     state.totalPrice = state.items.reduce((sum, obj) => { return sum + obj.price; }, 0)
        //     state.totalCount = state.items.length
        // },
        // removeItem(state, action: PayloadAction<number>) {
        //     state.totalCount = action.payload
        // },
        // removeItem(state, action: PayloadAction<number>) {
        //     state.items = state.items.filter(obj => obj.id !== action.payload)
        // },
        clearItems(state) {
            state.items = []
        },

        // action: The entire object dispatched to the reducer, which includes a type and optionally a payload.
        // payload: The data that comes with the action and is used to update the state.
    }
});

export const { addProduct, clearItems } = shoppingCartSlice.actions //redusers are stored in the actions

export default shoppingCartSlice.reducer