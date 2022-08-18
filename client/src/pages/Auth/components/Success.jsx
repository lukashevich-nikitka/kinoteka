import React from 'react';
import { useDispatch } from 'react-redux';
import backToRegistration from '../../../store/Auth/actions';

function Success() {
  const dispatch = useDispatch();
  const backToRegistr = () => dispatch(backToRegistration(''));
  return (
    <div className="error-wrapper">
      <div>You have successfully registered, go to the login page!</div>
      <button type="submit" onClick={backToRegistr}>Back to registration page</button>
    </div>
  );
}

export default Success;
