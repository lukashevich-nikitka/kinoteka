import React from 'react';
import { useDispatch } from 'react-redux';
import backToLoginPage from '../../../store/Login/actions';

function Success() {
  const dispatch = useDispatch();
  const backToLogin = () => dispatch(backToLoginPage(''));
  return (
    <div className="error-wrapper">
      <div>Welcome, go to the main page!</div>
      <button type="submit" onClick={backToLogin}>Back to Login page</button>
    </div>
  );
}

export default Success;
