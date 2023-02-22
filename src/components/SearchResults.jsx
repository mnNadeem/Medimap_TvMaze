import React, { useContext } from "react";
import { Box, Typography, Grid } from "@mui/material";
import { SearchResult } from "./SearchResult";
import { SearchContext } from "./SearchContext";

export const SearchResults = () => {
  const { searchResults } = useContext(SearchContext);

  return (
    <>
      {searchResults?.length ? (
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            alignSelf: "stretch",
          }}
        >
          <Typography variant="h4" component="h2">
            Search Results
          </Typography>
          <Grid container spacing={2} style={{ marginTop: "12px" }}>
            {searchResults.map(({ show }) => {
              const { id } = show;
              return (
                <Grid item xs={12} sm={6} md={4} lg={3} key={id}>
                  <SearchResult show={show} />
                </Grid>
              );
            })}
          </Grid>
        </Box>
      ) : null}
    </>
  );
};
