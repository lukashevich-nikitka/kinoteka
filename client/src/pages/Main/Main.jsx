import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import getFilmsList from '../../store/Main/thunks';
import Film from './components/Film';
import '../../styles/Main.css';

function App() {
  const dispatch = useDispatch();
  const filmList = useSelector((state) => state.films);
  useEffect(() => {
    dispatch(getFilmsList());
  }, []);
  return (
    <div className="films-wrapper">
      {filmList.map(() => <Film />)}
    </div>
  );
}

export default App;
