import { createSlice } from '@reduxjs/toolkit';
import { ITrendingState } from './types';

const initialState: ITrendingState = {
  since: 'daily',
  prog_lang: undefined,
  spoken_language_code: undefined,
};

const { reducer, actions } = createSlice({
  name: 'LANGUAGE',
  initialState,
  reducers: {
    setSpokenLanguage: (state, { payload }) => ({ ...state, spoken_language_code: payload }),
    setProgLanguage: (state, { payload }) => ({ ...state, prog_lang: payload }),
    setSince: (state, { payload }) => ({ ...state, since: payload }),
  },
});
export const { setProgLanguage, setSpokenLanguage, setSince } = actions;
export const trendingReducer = reducer;
