// "use client"
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from '@reduxjs/toolkit'
import { dirname } from "path";
import { useRef } from "react";

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

const calculateTotals = (state: StateTypes) => {
    state.totalPrice = state.items.reduce((sum, obj) => sum + (obj.price * obj.count), 0);
    state.totalCount = state.items.reduce((sum, obj) => sum + obj.count, 0);
};


const shoppingCartSlice = createSlice({
    name: 'shoppingCart',
    initialState,
    reducers: {
        addProduct(state, action: PayloadAction<any>) {
            const findItem = state.items.find(item => item.id === action.payload.id);

            if (findItem) {
                findItem.count++;
            } else {
                state.items.push({
                    ...action.payload,
                    count: 1
                });
            }
            calculateTotals(state);
        },

        removeProduct(state, action: PayloadAction<number>) {
            const findItem = state.items.find(item => item.id === action.payload);

            if (findItem) {
                if (findItem.count > 1) {
                    findItem.count--;
                } else {
                    state.items = state.items.filter(item => item.id !== action.payload);
                }
                calculateTotals(state);
            }
        },

        clearItems(state) {
            state.items = []
        },
    },
}); 

// const shoppingCartSlice = createSlice({
//     name: 'shoppingCart',
//     initialState,
//     reducers: {
//         // addProduct(state, action: PayloadAction<any>) { 
//         //     const findItem = state.items.find(obj => obj.id == action.payload.id)

//         //     if (findItem) {
//         //         findItem.count++
//         //     } else {
//         //         state.items.push({
//         //             ...action.payload,
//         //             count: 1
//         //         })
//         //     };
//         //     state.totalPrice = state.items.reduce((sum, obj) => {
//         //         return (obj.price * obj.count) + sum
//         //     }, 0);
//         //     state.totalCount = state.items.reduce((sum, obj) => {
//         //         return sum + obj.count
//         //     }, 0);

//         // },

//         // removeProduct(state, action: PayloadAction<any>) {
//         //     const findItem = state.items.find(obj => obj.id == action.payload)
//         //     // console.log(findItem)
//         //     // console.log("res: " + action.payload)
//         //     if (findItem) {
//         //         if (findItem.count > 1) {
//         //             findItem.count--;
//         //         } 
//         //         else {
//         //             state.items = state.items.filter(obj => obj.id !== action.payload);
//         //         }
//         //     }
//         addProduct(state, action: PayloadAction<any>) { 
//             const findItemId = state.items.find(obj => obj.id == action.payload.id)

//             if (findItemId) {
//                 findItemId.count++
//             } else {
//                 state.items.push({
//                     ...action.payload,
//                     count: 1
//                 })
//             };
//             state.totalPrice = state.items.reduce((sum, obj) => {
//                 return (obj.price * obj.count) + sum
//             }, 0);
//             state.totalCount = state.items.reduce((sum, obj) => {
//                 return sum + obj.count
//             }, 0);

//         },

//         removeProduct(state, action: PayloadAction<number>) {
//             const findItemId = state.items.find(obj => obj.id === action.payload);
        
//             if (findItemId) {
//                 if (findItemId.count > 1) {
//                     findItemId.count--;
//                     state.totalCount--; 
//                 } else {
//                     state.items = state.items.filter(obj => obj.id !== action.payload);
//                     state.totalCount--;  
//                 }
//             }
        
//             state.totalPrice = state.items.reduce((sum, obj) => {
//                 return sum + (obj.price * obj.count);
//             }, 0);
//         },
//         // addProduct(state, action: PayloadAction<any>) { // method
//         //     state.items.push(action.payload)
//         //     state.totalPrice = state.items.reduce((sum, obj) => { return sum + obj.price; }, 0)
//         //     state.totalCount = state.items.length
//         // },
//         // removeItem(state, action: PayloadAction<number>) {
//         //     state.totalCount = action.payload
//         // },
//         // removeItem(state, action: PayloadAction<number>) {
//         //     state.items = state.items.filter(obj => obj.id !== action.payload)
//         // },
//         clearItems(state) {
//             state.items = []
//         },

//         // action: The entire object dispatched to the reducer, which includes a type and optionally a payload.
//         // payload: The data that comes with the action and is used to update the state.
//         // reduce works:
// // reduce() takes two arguments: a callback function and an initial value (0 in this case).
// // The callback function takes two parameters:
// // sum: the accumulated value (in this case, the running total of the price).
// // obj: the current item being iterated over from the state.items array.
// // The reduce() function then processes each item, updating the sum by adding the product of price * count.
// // It returns the final accumulated sum after iterating over all items in the array.
//     }
// });



export const { addProduct, removeProduct, clearItems } = shoppingCartSlice.actions //redusers are stored in the actions

export default shoppingCartSlice.reducer