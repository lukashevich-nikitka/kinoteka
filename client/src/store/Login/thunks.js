import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const loginUser = createAsyncThunk(
  'user/loginUser',
  async (data) => {
    const response = await axios.post('http://localhost:4200/api/login', data);
    return response.data;
  },
);

export default loginUser;
