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
            <div className="comments">В этом блоке буду отображать комментарии</div>
          </>
        ))}
      </div>
    );
  } if (user.role === 'admin') {
    return (
      <>
        <div className="add-film-wrapper">
          <Button type="submit" size="large" variant="outlined">Add new film</Button>
        </div>
        <div className="films-wrapper">
          {filmList.map((_, index) => (
            <>
              <Film key={index} index={index} />
              <div className="comments">В этом блоке буду отображать комментарии</div>
            </>
          ))}
        </div>
      </>
    );
  }
}

export default Main;
