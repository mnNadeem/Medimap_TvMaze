import React, { useContext, useCallback, useState } from "react";
import styled from "@emotion/styled";
import { Box, TextField, Button } from "@mui/material";
import { SearchContext } from "./SearchContext";

const StyledBox = styled(Box)`
  display: flex;
  flex-direction: row;
  width: 480px;
  max-width: 100%;
  margin-top: 24px;
`;

export const SearchBar = () => {
  const { handleSearch } = useContext(SearchContext);
  const [input, setInput] = useState("");

  const handleInputChanged = useCallback((evt) => {
    const { value } = evt.target;
    setInput(value);
  }, []);

  const handleSearchClicked = useCallback(
    (evt) => {
      evt.preventDefault();
      handleSearch(input);
    },
    [handleSearch, input]
  );

  return (
    <StyledBox>
      <TextField
        id="query"
        variant="outlined"
        placeholder="TV Show Query"
        value={input}
        onChange={handleInputChanged}
        style={{ flex: 1 }}
      />
      <Button variant="contained" color="primary" onClick={handleSearchClicked}>
        Search
      </Button>
    </StyledBox>
  );
};
