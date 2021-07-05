import { createSelector } from '@reduxjs/toolkit';
import { IReduxStore } from '../types';

const trendingState = (state: IReduxStore) => state.trending;

export const trendSelector = createSelector(trendingState, ({ prog_lang, spoken_language_code, since }) => ({
  prog_lang,
  spoken_language_code,
  since,
}));
