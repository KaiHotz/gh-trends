import { combineReducers } from '@reduxjs/toolkit';
import { trendingReducer } from './trending/slice';

export const rootReducer = combineReducers({
  trending: trendingReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
