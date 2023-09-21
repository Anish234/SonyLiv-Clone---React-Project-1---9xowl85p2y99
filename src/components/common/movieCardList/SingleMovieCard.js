import React from 'react';
import "./SingleMovieCard.css";
import { useNavigate } from 'react-router-dom';
const SingleMovieCard = (props) => {
  const navigate = useNavigate()
  return (
    <>
      <div className="movie-card-container" onClick={() => {
        navigate('/content', { state: props.movie })
      }}>
        <div className="movie-card-inner-container c-pointer">
          <img alt="movieimage" src={props.movie.thumbnail} />
          <p>{props.movie.title}</p>

          {props.num >= 0 && <div className="top-num">{props.num + 1}</div>}
        </div>
      </div>
    </>
  );
};
export default SingleMovieCard;
