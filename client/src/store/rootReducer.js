import { combineReducers } from '@reduxjs/toolkit';
import mainReducer from './Main/reducers';
import authReducer from './Auth/reducers';
import loginReducer from './Login/reducers';

const rootReducer = combineReducers({
  main: mainReducer,
  auth: authReducer,
  login: loginReducer,
});

export default rootReducer;
