import React, { useState } from 'react';

const SearchBox = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleSearch = () => {
    if (query.trim()) {
      onSearch(query);
    }
  };

  return (
    <div className="search-box">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search for a location"
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default SearchBox;
