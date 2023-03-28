import React, { useEffect, useState } from 'react';
import '../App.css';

const MovieCard = ({ movie }) => {
  const { Title, Year, imdbID, Poster } = movie;

  const [details, setDetails] = useState({});

  useEffect(() => {
    const apiKey = 'ba38e15e';
    fetch(`http://www.omdbapi.com/?apikey=${apiKey}&i=${imdbID}`)
      .then((response) => response.json())
      .then((data) => setDetails(data));
  }, [imdbID]);

  const {
    Genre = 'N/A',
    Director = 'N/A',
    Actors = 'N/A',
    Awards = 'N/A',
  } = details;

  const handleImageError = (event) => {
    event.target.src = 'https://www.jbcookiecutters.com/wp-content/uploads/2018/11/JB_Popcorn-783-A045-Stencil_00000.jpg'; //TATT FRA DENNE NETTSIDEN! https://www.jbcookiecutters.com/product/popcorn-783-a045-stencil/
  };

  return (
    <div className="movie-card">
      <img src={Poster} alt={Title} onError={handleImageError} />
      <h3>{Title}</h3>
      <p>Year: {Year}</p>
      <p>Genre: {Genre}</p>
      <p>Director: {Director}</p>
      <p>Actors: {Actors}</p>
      <p>Awards: {Awards}</p>
      <a href={`https://www.imdb.com/title/${imdbID}`} target="_blank" rel="noreferrer">
        View on IMDB
      </a>
    </div>
  );
};

export default MovieCard;
