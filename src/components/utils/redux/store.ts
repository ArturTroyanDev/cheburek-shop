import { configureStore } from '@reduxjs/toolkit'
import filter from './slices/filterSlice'
import flag from './slices/flagSlice'
import counter from './slices/conterSlice'

export const store = configureStore({
    reducer: {
        filter,
        flag,
        counter,
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch