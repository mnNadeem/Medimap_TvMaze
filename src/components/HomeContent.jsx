import React, { createContext } from "react";
import { SearchBar } from "./SearchBar";
import { SearchResults } from "./SearchResults";
import { SearchProvider } from "./SearchContext";
import styled from "@emotion/styled";

export const SearchContext = createContext();

const Box = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h1`
  margin: 0;
  font-weight: 400;
  font-size: 3rem;
  line-height: 1.167;
  letter-spacing: 0em;
`;

export const HomeContent = () => {
  return (
    <SearchProvider>
      <Box>
        <Title>Medimap TVMaze Coding Exercise</Title>
        <SearchBar />
        <div style={{ marginTop: "120px" }} />
        <SearchResults />
      </Box>
    </SearchProvider>
  );
};
