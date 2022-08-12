/* eslint-disable react/no-array-index-key */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from '@material-ui/core';
import filmThunks from '../../store/Main/thunks';
import Film from './components/Film';
import '../../styles/Main.css';

function Main() {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.login.loginAnswer.token);
  useEffect(() => {
    dispatch(filmThunks.getUserRights(token));
    dispatch(filmThunks.getFilmsList());
    dispatch(filmThunks.saveComment());
  }, [dispatch, token]);
  const filmList = useSelector((state) => state.main.films);
  const user = useSelector((state) => state.main.userRights);
  if (user.role === 'unknown') {
    return (
      <div className="films-wrapper">
        {filmList.map((_, index) => <Film key={index} index={index} />)}
      </div>
    );
  } if (user.role === 'user') {
    return (
      <div className="films-wrapper">
        {filmList.map((_, index) => (
          <>
            <Film key={index} index={index} />
            <div className="comments">
              <label htmlFor="comment">Write your comment here:</label>
              <input id="pass" />
            </div>
          </>
        ))}
      </div>
    );
  } if (user.role === 'admin') {
    return (
      <>
        <div className="add-film-wrapper">
          <Button type="submit" size="medium" variant="outlined">Add new film</Button>
        </div>
        <div className="films-wrapper">
          {filmList.map((_, index) => (
            <>
              <Film key={index} index={index} />
              <div className="comments">
                <label htmlFor="comment">Write your comment here:</label>
                <input id="pass" />
              </div>
            </>
          ))}
        </div>
      </>
    );
  }
}

export default Main;
