'use client'

import { createSlice } from '@reduxjs/toolkit';

const yourSlice = createSlice({
  name: 'yourSlice',
  initialState: {
    selectedPeriod: "2024/11/01 - 2024/11/15",
    market: 7,
    totalTickets: 80,
    selectedTickets: 33
  },
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
  },
});

export const { increment, decrement } = yourSlice.actions;
export default yourSlice.reducer; 