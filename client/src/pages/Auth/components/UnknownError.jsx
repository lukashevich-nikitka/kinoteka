import React from 'react';
import { useDispatch } from 'react-redux';
import backToRegistration from '../../../store/Auth/actions';

function UnknownError() {
  const dispatch = useDispatch();
  const backToRegistr = () => dispatch(backToRegistration(''));
  return (
    <div className="error-wrapper">
      <div>Something went wrong</div>
      <button type="submit" onClick={backToRegistr}>Back to registration page</button>
    </div>
  );
}

export default UnknownError;
