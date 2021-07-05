/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable global-require */
import { configureStore, Action } from '@reduxjs/toolkit';
import { ThunkAction } from 'redux-thunk';
import { rootReducer, RootState } from './reducers';

const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV !== 'production',
});
export type AppThunk = ThunkAction<void, RootState, unknown, Action<string>>;

export { store };
