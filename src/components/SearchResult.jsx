import React from "react";
import styled from "@emotion/styled";
import { Card, CardHeader, CardMedia } from "@mui/material";
import Link from "next/link";

const StyledCard = styled(Card)`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const StyledCardHeader = styled(CardHeader)`
  flex: 1;
`;

export const SearchResult = (props) => {
  const { show } = props;
  const { name, image, id } = show;
  return (
    <Link href={`shows/${id}`}>
      <StyledCard>
        <StyledCardHeader title={name} />
        <CardMedia
          component="img"
          image={image?.medium || image?.original}
          alt={name}
        />
      </StyledCard>
    </Link>
  );
};
