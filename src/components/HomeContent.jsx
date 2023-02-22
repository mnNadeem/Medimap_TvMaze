import React, { createContext } from "react";
import { Box, Typography } from "@mui/material";
import { SearchBar } from "./SearchBar";
import { SearchResults } from "./SearchResults";
import { SearchProvider } from "./SearchContext";

export const SearchContext = createContext();

export const HomeContent = () => {
  return (
    <SearchProvider>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography variant="h3" component="h1">
          Medimap TVMaze Coding Exercise
        </Typography>
        <SearchBar />
        <div style={{ marginTop: "120px" }} />
        <SearchResults />
      </Box>
    </SearchProvider>
  );
};
