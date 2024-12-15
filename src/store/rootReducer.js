import { combineReducers } from 'redux';
import cardSlice from './slices/cardSlice'; // Import your slice reducers

const rootReducer = combineReducers({
  cardSlice, // Add your slice reducers here
});

export default rootReducer; 