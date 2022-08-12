import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const getFilmsList = createAsyncThunk(
  'films/getFilmsList',
  async () => {
    const response = await axios.get('http://localhost:4200/api/films');
    return response.data;
  },
);

const getUserRights = createAsyncThunk(
  'films/getUserRights',
  async (token) => {
    if (token) {
      const response = await axios.get(`http://localhost:4200/api/userRights/${token}`);
      return response.data;
    }
    const response = await axios.get('http://localhost:4200/api/userRights/unknown');
    return response.data;
  },
);

const saveComment = createAsyncThunk(
  'films/saveComments',
  async (filmInfo) => {
    const response = await axios.post('http://localhost:4200/api/saveComment', filmInfo);
    return response.data;
  },
);

const filmThunks = {
  getFilmsList,
  getUserRights,
  saveComment,
};

export default filmThunks;
