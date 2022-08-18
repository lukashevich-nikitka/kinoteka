/* eslint-disable import/no-cycle */
import React, { useState } from 'react';
import { useDispatch, connect } from 'react-redux';
import filmThunks from '../../../store/Main/thunks';
// import addFilmToList from '../../../store/Main/actions';

function AddFilm(props) {
  const { addFilm, comments } = props;
  const dispatch = useDispatch();
  const [filmName, setFilmName] = useState('');
  const [filmGenre, setFilmGenre] = useState('');
  const [filmDescription, setFilmDescription] = useState('');
  const pushFilm = function () {
    dispatch(filmThunks.addFilm(
      {
        name: filmName, genre: filmGenre, description: filmDescription, comments: [],
      },
    ));
    function changeToMain() {
      if (filmName !== comments[0].name) {
        addFilm(false);
      } else {
        changeToMain();
      }
    }
    changeToMain();
  };
  const addFilmName = (e) => setFilmName(e.target.value);
  const addFilmGenre = (e) => setFilmGenre(e.target.value);
  const addFilmDescription = (e) => setFilmDescription(e.target.value);
  return (
    <div className="add-film-container">
      <div className="add-film-block">
        <label htmlFor="name">Film name:</label>
        <input id="name" className="new-film-info" onChange={addFilmName} />
      </div>
      <div className="add-film-block">
        <label htmlFor="genre">Genre:</label>
        <input id="genre" className="new-film-info" onChange={addFilmGenre} />
      </div>
      <div className="add-film-block">
        <div>Description: </div>
        <textarea className="description" onChange={addFilmDescription} />
      </div>
      <button type="submit" className="add-film-button" onClick={pushFilm}>Push</button>
    </div>
  );
}

export default connect((state) => ({
  films: state.main.films,
  comments: state.main.allComments,
}))(AddFilm);
