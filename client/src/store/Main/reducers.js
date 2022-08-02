/* eslint-disable no-param-reassign */
import { createReducer } from '@reduxjs/toolkit';
import getFilmsList from './thunks';

const initialState = {
  films: [],
};

const mainReducer = createReducer(initialState, {
  [getFilmsList.fulfilled]: (state, action) => {
    state.films = action.payload;
  },
});

export default mainReducer;
