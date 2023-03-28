import React from 'react';
import MovieCard from './MovieCard';
import NotFound from './NotFound';

const SearchResults = ({ results }) => {
  if (results.length === 0) {
    return <NotFound />;
  }

  return (
    <div className="search-results">
      {results.map((result) => (
        <MovieCard key={result.imdbID} movie={result} />
      ))}
    </div>
  );
};

export default SearchResults;
