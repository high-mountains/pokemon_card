"use client";

import { createSlice } from "@reduxjs/toolkit";

const cardSlice = createSlice({
    name: "cardSlice",
    initialState: {
        selectedPeriod: "2024/11/01 - 2024/11/15",
        market: 7,
        totalTickets: 80,
        selectedTickets: 33,

        isSearchOpen: true,
    },
    reducers: {
        setSearchOpen: (state, action) => {
            state.isSearchOpen = action.payload;
        },
    },
});

export const { setSearchOpen } = cardSlice.actions;
export default cardSlice.reducer;