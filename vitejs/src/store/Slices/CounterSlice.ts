import { PayloadAction, createSlice } from '@reduxjs/toolkit'

interface ICounterSliceState {
  count: number
}

const initialState: ICounterSliceState = {
  count: 999,
}

export const CounterSlice = createSlice({
  name: 'pageWidth',
  initialState,
  reducers: {
    increment(state) {
      state.count++
    },
    decrement(state) {
      state.count--
    },
  },
})

export default CounterSlice.reducer
