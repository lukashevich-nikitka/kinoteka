/* eslint-disable import/no-cycle */
/* eslint-disable react/no-array-index-key */
import React, { useEffect, useState } from 'react';
import { useDispatch, connect } from 'react-redux';
import { Button } from '@material-ui/core';
import filmThunks from '../../store/Main/thunks';
import Film from './components/Film';
import AddFilm from './components/AddFilm';
import '../../styles/Main.css';

function Main({
  token, comments, filmList, user,
}) {
  const [comment, setComment] = useState('');
  const [click, setClick] = useState(false);
  const [adminClick, setAdminClick] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(filmThunks.getUserRights(token));
    dispatch(filmThunks.getFilmsList());
    dispatch(filmThunks.getComments());
  }, [dispatch, token]);
  const setCommentFromInput = (event) => setComment(event.target.value);
  const pushComment = function (el) {
    if (comments[el].name !== undefined) {
      dispatch(filmThunks.saveComment({ name: comments[el].name, comment }));
      setClick(true);
    } else {
      pushComment(el);
    }
  };
  const addFilm = (el) => {
    setAdminClick(el);
  };
  if (user.role === 'unknown' && adminClick === false) {
    return (
      <div className="films-wrapper">
        {filmList.map((_, index) => <Film key={index} index={index} />)}
      </div>
    );
  } if (user.role === 'user' && adminClick === false) {
    return (
      <div className="films-wrapper">
        {filmList.map((_, index) => (
          <>
            <Film key={index} index={index} click={click} />
            <div className="comments">
              <label htmlFor="comment">Write your comment here:</label>
              <input id="pass" onChange={setCommentFromInput} />
              <button type="submit" onClick={() => pushComment(index)}>Отправить</button>
            </div>
          </>
        ))}
      </div>
    );
  } if (user.role === 'admin' && adminClick === false) {
    return (
      <>
        <div className="add-film-wrapper">
          <Button type="submit" size="medium" variant="outlined" onClick={() => addFilm(true)}>Add new film</Button>
        </div>
        <div className="films-wrapper">
          {filmList.map((_, index) => (
            <>
              <Film key={index} index={index} />
              <div className="comments">
                <label htmlFor="comment">Write your comment here:</label>
                <input id="comment" onChange={setCommentFromInput} />
                <button type="submit" onClick={() => pushComment(index)}>Отправить</button>
              </div>
            </>
          ))}
        </div>
      </>
    );
  } if (adminClick === true) {
    return (
      <AddFilm addFilm={addFilm} />
    );
  }
}

// export default Main;

export default connect((state) => ({
  token: state.login.loginAnswer.token,
  comments: state.main.allComments,
  filmList: state.main.films,
  user: state.main.userRights,
}))(Main);
