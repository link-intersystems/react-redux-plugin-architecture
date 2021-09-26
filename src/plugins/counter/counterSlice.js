import { createSlice } from "@reduxjs/toolkit";
import { incrementByAmount, decrementByAmount } from "./CounterController";
import asyncFunc from "./async";

export const slice = createSlice({
  name: "counter",
  initialState: 0,
  reducers: {
    increment: (state) => {
      return incrementByAmount(state, 1);
    },
    decrement: (state) => {
      return decrementByAmount(state, 1);
    },
  },
});
export const { increment, decrement } = slice.actions;

export const incrementAsync = asyncFunc(increment);
export const decrementAsync = asyncFunc(decrement);

export const selectCount = (state) => state.counter;

export default slice.reducer;
