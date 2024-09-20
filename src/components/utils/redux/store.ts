import { configureStore } from '@reduxjs/toolkit'
import filter from './slices/filterSlice'
import flag from './slices/flagSlice'
// import counter from './slices/conterSlice'
import shoppingCart from './slices/shoppingCartSlice'

export const store = configureStore({
    reducer: {
        filter,
        flag,
        // counter,
        // shoppingCart,
    },
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch