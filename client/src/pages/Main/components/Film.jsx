import React from 'react';
import { useSelector } from 'react-redux';

function Film(props) {
  const { index } = props;
  const name = useSelector((state) => state.main.films[index].name);
  const genre = useSelector((state) => state.main.films[index].genre);
  const description = useSelector((state) => state.main.films[index].description);
  return (
    <div className="film-container">
      <div className="film-name">{name}</div>
      <div className="film-genre">{`Жанр: ${genre}`}</div>
      <div className="film-description">{`Описание: ${description}`}</div>
    </div>
  );
}

export default Film;
