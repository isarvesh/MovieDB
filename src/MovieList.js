import React from 'react';
import Movie from './Movie';

function MovieList(props) {
  return (
    <div className="movie-list">
      {props.movies.map((movie) => (
        <Movie key={movie.imdbID} movie={movie} />
      ))}
    </div>
  );
}

export default MovieList;
