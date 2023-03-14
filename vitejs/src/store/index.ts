import { configureStore } from '@reduxjs/toolkit'
import CounterSlice from './Slices/CounterSlice'

export const setupStore = () =>
  configureStore({
    reducer: CounterSlice,
  })

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']
