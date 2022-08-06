import { configureStore } from '@reduxjs/toolkit';
import authReducer from './Auth/reducers';

const store = configureStore({
  reducer: authReducer,
});

export default store;
