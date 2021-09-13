import React from 'react';

const Search = ({ searchHandler }) => {
  return (
    <input
      type="search"
      className="form-control w39 ml-3"
      placeholder="Search Task..."
      onChange={searchHandler}
    />
  );
};

export default Search;
