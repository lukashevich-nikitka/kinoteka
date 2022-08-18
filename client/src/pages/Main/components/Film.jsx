import React from 'react';
import { useSelector } from 'react-redux';

function Film(props) {
  const { index } = props;
  const name = useSelector((state) => state.main.films[index].name);
  const genre = useSelector((state) => state.main.films[index].genre);
  const description = useSelector((state) => state.main.films[index].description);
  const comments = useSelector((state) => state.main.allComments);
  const currentComments = useSelector((state) => state.main.comments.currentComments);
  const currentIndex = useSelector((state) => state.main.comments.index);
  if (comments.length && index !== currentIndex) {
    return (
      <div className="film-container">
        <div className="film-info">
          <div className="film-name">{name}</div>
          <div className="film-genre">{`Жанр: ${genre}`}</div>
          <div className="film-description">{`Описание: ${description}`}</div>
        </div>
        <div className="comments">
          {(comments.filter((el) => el.name === name))[0].comments
            .map((_, idx) => (
              <div>
                {(comments.filter((el) => el.name === name))[0]
                  .comments[idx]}
              </div>
            ))}
        </div>
      </div>
    );
  } if (comments.length !== 0 && index === currentIndex) {
    return (
      <div className="film-container">
        <div className="film-info">
          <div className="film-name">{name}</div>
          <div className="film-genre">{`Жанр: ${genre}`}</div>
          <div className="film-description">{`Описание: ${description}`}</div>
        </div>
        <div className="comments">
          {currentComments.map((_, indx) => <div>{currentComments[indx]}</div>)}
        </div>
      </div>
    );
  }
  return 'loading';
}

export default Film;
