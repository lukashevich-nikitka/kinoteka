/* eslint-disable no-param-reassign */
import { createReducer } from '@reduxjs/toolkit';
import registrNewUser from './thunks';
import backToRegistration from './actions';

const initialState = {
  registrAnswer: '',
};

const authReducer = createReducer(initialState, {
  [registrNewUser.fulfilled]: (state, action) => {
    state.registrAnswer = action.payload;
  },
  [backToRegistration]: (state, action) => {
    state.registrAnswer = action.payload;
  },
});

export default authReducer;
