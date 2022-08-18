import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { TextField, Button } from '@material-ui/core';
import { useForm } from 'react-hook-form';
import '../../styles/Auth.css';
import registrNewUser from '../../store/Auth/thunks';
import Success from './components/Success';
import EmailError from './components/EmailError';
import UnknownError from './components/UnknownError';

function Auth() {
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();
  const registerInfo = useSelector((state) => state.auth.registrAnswer);
  const onSubmit = (data) => dispatch(registrNewUser(data));
  if (registerInfo === '') {
    return (
      <form className="auth-form-wrapper" onSubmit={handleSubmit(onSubmit)}>
        <div>Create an account</div>
        <TextField
          size="medium"
          variant="outlined"
          label="Name"
          {...register('name', { required: true })}
        />
        <TextField
          size="medium"
          variant="outlined"
          label="Surname"
          {...register('surname', { required: true })}
        />
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
          Create
        </Button>
      </form>
    );
  } if (registerInfo === 'Вы успешно прошли регистрацию!') {
    return <Success />;
  } if (registerInfo === 'Пользователь с таким email уже существует!') {
    return <EmailError />;
  }
  return <UnknownError />;
}

export default Auth;
