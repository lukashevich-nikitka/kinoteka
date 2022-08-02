import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const registrNewUser = createAsyncThunk(
  'newUser/registrNewUser',
  async (data) => {
    const response = await axios.post('http://localhost:4200/api/auth', data);
    return response;
  },
);

export default registrNewUser;
