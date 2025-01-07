"use client";

import { createSlice } from "@reduxjs/toolkit";

const cardSlice = createSlice({
    name: "cardSlice",
    initialState: {
        startPeriod:"",
        endPeriod:"",
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
        setDateRange: (state, action) => {
            const temp = action.payload;
            console.log("temp==>", temp)
            state.startPeriod = action.payload.startDate
            state.endPeriod = action.payload.endDate    
        }
    },
});

export const { setSearchOpen, setDateRange } = cardSlice.actions;
export default cardSlice.reducer;