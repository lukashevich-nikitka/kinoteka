import { configureStore } from '@reduxjs/toolkit';
import mainReducer from './Main/reducers';

const store = configureStore({ reducer: mainReducer });

export default store;
