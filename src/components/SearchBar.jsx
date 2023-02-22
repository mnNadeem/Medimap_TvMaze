import React, { useContext, useCallback, useState } from "react";
import { Box, TextField, Button } from "@mui/material";
import { SearchContext } from "./SearchContext";

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
    <Box
      style={{
        display: "flex",
        flexDirection: "row",
        width: "480px",
        maxWidth: "100%",
        marginTop: "24px",
      }}
    >
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
    </Box>
  );
};
