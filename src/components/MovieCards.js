import React, { useState, useEffect } from 'react';
import SearchResults from './searchResults';
import NotFound from './NotFound';

const MovieCards = () => {
  const [results, setResults] = useState([]);
  const [query, setQuery] = useState('James Bond');
  const [error, setError] = useState(false);

  useEffect(() => {
    const apiKey = 'ba38e15e';
    fetch(`http://www.omdbapi.com/?apikey=${apiKey}&s=${query}&type=movie`)
      .then((response) => response.json())
      .then((data) => {
        if (data.Response === 'True') {
          setResults(data.Search);
          setError(false);
        } else {
          setResults([]);
          setError(true);
        }
      });
  }, [query]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const input = event.target.search.value;
    setQuery(input);
  };

  return (
    <div className="movie-cards">
      <form className="search-form" onSubmit={handleSubmit}>
        <input
          className="search-input"
          type="text"
          name="search"
          defaultValue={query}
        />
        <button className="search-button" type="submit">
          Search
        </button>
      </form>
      {error ? <NotFound /> : <SearchResults results={results} />}
    </div>
  );
};

export default MovieCards;
