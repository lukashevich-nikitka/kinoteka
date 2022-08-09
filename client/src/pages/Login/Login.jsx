import React from 'react';
import { TextField, Button } from '@material-ui/core';
import { useForm } from 'react-hook-form';
import '../../styles/Auth.css';
import { useDispatch } from 'react-redux';
import loginUser from '../../store/Login/thunks';

function Login() {
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();
  const onSubmit = async (data) => {
    dispatch(loginUser(data));
  };
  return (
    <form className="auth-form-wrapper" onSubmit={handleSubmit(onSubmit)}>
      <div>Login</div>
      <TextField
        type="email"
        size="medium"
        variant="outlined"
        label="Email"
        {...register('email', { required: true })}
      />
      <TextField
        type="password"
        label="Password"
        size="medium"
        variant="outlined"
        {...register('password', { required: true, minLength: 6 })}
      />
      <Button type="submit" size="large" variant="outlined">
        Login
      </Button>
    </form>
  );
}

export default Login;
