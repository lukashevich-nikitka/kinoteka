import React from 'react';
import { useDispatch } from 'react-redux';
import backToRegistration from '../../../store/Auth/actions';

function EmailError() {
  const dispatch = useDispatch();
  const backToRegistr = () => dispatch(backToRegistration(''));
  return (
    <div className="error-wrapper">
      <div>User with this email already exists!</div>
      <button type="submit" onClick={backToRegistr}>Back to registration page</button>
    </div>
  );
}

export default EmailError;
