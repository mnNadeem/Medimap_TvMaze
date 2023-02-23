import React, { useContext } from "react";
import { Box, Typography, Grid } from "@mui/material";
import styled from "@emotion/styled";
import { SearchContext } from "./SearchContext";
import { SearchResult } from "./SearchResult";

const ResultsBox = styled(Box)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-self: stretch;
`;

const ResultsHeader = styled(Typography)`
  font-size: 1.875rem;
  font-weight: bold;
`;

const ResultsGrid = styled(Grid)`
  margin-top: 12px;
`;

export const SearchResults = () => {
  const { searchResults } = useContext(SearchContext);

  return (
    <>
      {searchResults?.length ? (
        <ResultsBox>
          <ResultsHeader variant="h4" component="h2">
            Search Results
          </ResultsHeader>
          <ResultsGrid container spacing={2}>
            {searchResults.map(({ show }) => {
              const { id } = show;
              return (
                <Grid item xs={12} sm={6} md={4} lg={3} key={id}>
                  <SearchResult show={show} />
                </Grid>
              );
            })}
          </ResultsGrid>
        </ResultsBox>
      ) : null}
    </>
  );
};
