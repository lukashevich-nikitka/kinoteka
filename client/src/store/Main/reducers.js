/* eslint-disable no-param-reassign */
import { createReducer } from '@reduxjs/toolkit';
import filmThunks from './thunks';

const initialState = {
  films: [],
  userRights: { name: 'Неизвестный пользователь', role: 'unknown' },
  comments: ['Отличный фильм'],
};

const mainReducer = createReducer(initialState, {
  [filmThunks.getFilmsList.fulfilled]: (state, action) => {
    state.films = action.payload;
  },
  [filmThunks.getUserRights.fulfilled]: (state, action) => {
    state.userRights = action.payload;
  },
  [filmThunks.saveComment.fulfilled]: (state, action) => {
    state.comments = action.payload;
  },
});

export default mainReducer;
