import React, { createContext, useCallback, useState } from "react";
import axios from "axios";

export const SearchContext = createContext();

export const SearchProvider = ({ children }) => {
  const [searchResults, setSearchResults] = useState([]);

    const handleSearch = useCallback(async (query) => {
    if (!query) {
      alert("Please enter a query before pressing search");
      return;
    }
    try {
      const { data } = await axios.get(
        `https://api.tvmaze.com/search/shows?q=${query}`
      );
      setSearchResults(data);
    } catch (error) {
      console.error("Error occurred while searching: ", error);
      setSearchResults([]);
    }
  }, []);

  return (
    <SearchContext.Provider value={{ searchResults, handleSearch }}>
      {children}
    </SearchContext.Provider>
  );
};
