import React from 'react';

function Movie(props) {
  const { Title, Poster, Year, Plot } = props.movie;

  return (
    <div className="movie">
      <h2>{Title}</h2>
      <img src={Poster} alt={Title} />
      <p><strong>Year:</strong> {Year}</p>
      <p><strong>Plot:</strong> {Plot}</p>
    </div>
  );
}

export default Movie;
