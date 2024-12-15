import { configureStore } from '@reduxjs/toolkit'
import cardSlice from './slices/cardSlice'

export const store = configureStore({
  reducer: {
    cardSlice: cardSlice,
  },
})

// Add these type definitions
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch 