import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const getFilmsList = createAsyncThunk(
  'films/getFilmsList',
  async () => {
    const response = await axios.get('http://localhost:4200/api/films');
    return response.data;
  },
);

export default getFilmsList;
