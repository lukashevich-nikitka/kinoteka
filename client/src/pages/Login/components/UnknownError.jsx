import React from 'react';
import { useDispatch } from 'react-redux';
import backToLoginPage from '../../../store/Login/actions';

function UnknownError() {
  const dispatch = useDispatch();
  const backToLogin = () => dispatch(backToLoginPage(''));
  return (
    <div className="error-wrapper">
      <div>User with such data does not exist! Check your username or password!</div>
      <button type="submit" onClick={backToLogin}>Back to login page</button>
    </div>
  );
}

export default UnknownError;
