import { configureStore } from '@reduxjs/toolkit'
import shoppingCartSlice from './slices/shoppingCartSlice'
import flagSlice from './slices/flagSlice'
import filterSlice from './slices/filterSlice'

export const makeStore = () => {
  return configureStore({
    reducer: {
        shoppingCart: shoppingCartSlice,
        flag: flagSlice,
        filter: filterSlice
    }
  })
}

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']

// shoppingCart,
// filter,