import React, { createContext, useCallback, useState } from "react";
import { search } from "../pages/api/Search";

export const SearchContext = createContext();

export const SearchProvider = ({ children }) => {
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = useCallback(async (query) => {
    const data = await search(query);
    setSearchResults(data);
  }, []);

  return (
    <SearchContext.Provider value={{ searchResults, handleSearch }}>
      {children}
    </SearchContext.Provider>
  );
};
