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
    setSpokenLanguage: (state, { payload }) => ({ ...state, spoken_language_code: payload, prog_lang: initialState.prog_lang }),
    setProgLanguage: (state, { payload }) => ({
      ...state,
      prog_lang: payload,
      spoken_language_code: initialState.spoken_language_code,
      since: initialState.since,
    }),
    setSince: (state, { payload }) => ({ ...state, since: payload, prog_lang: initialState.prog_lang }),
  },
});
export const { setProgLanguage, setSpokenLanguage, setSince } = actions;
export const trendingReducer = reducer;
