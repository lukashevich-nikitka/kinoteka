/* eslint-disable no-param-reassign */
import { createReducer } from '@reduxjs/toolkit';
import loginUser from './thunks';
import backToLoginPage from './actions';

const initialState = {
  loginAnswer: '',
};

const loginReducer = createReducer(initialState, {
  [loginUser.fulfilled]: (state, action) => {
    state.loginAnswer = action.payload;
  },
  [backToLoginPage]: (state, action) => {
    state.loginAnswer = action.payload;
  },
});

export default loginReducer;
