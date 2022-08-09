/* eslint-disable no-param-reassign */
import { createReducer } from '@reduxjs/toolkit';
import filmThunks from './thunks';

const initialState = {
  films: [],
  userRights: { name: 'Неизвестный пользователь', role: 'unknown' },
};

const mainReducer = createReducer(initialState, {
  [filmThunks.getFilmsList.fulfilled]: (state, action) => {
    state.films = action.payload;
  },
  [filmThunks.getUserRights.fulfilled]: (state, action) => {
    state.userRights = action.payload;
  },
});

export default mainReducer;
