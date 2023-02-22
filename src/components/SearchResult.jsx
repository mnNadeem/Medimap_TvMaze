import React from "react";
import { Card, CardHeader, CardMedia } from "@mui/material";
import  Link  from "next/link";

export const SearchResult = (props) => {
  const { show } = props;
  const { name, image, id } = show;
  return (
    <Link href={`shows/${id}`}>
      <Card
        style={{ display: "flex", flexDirection: "column", height: "100%" }}
      >
        <CardHeader title={name} style={{ flex: 1 }} />
        <CardMedia
          component="img"
          image={image?.medium || image?.original}
          alt={name}
        />
      </Card>
    </Link>
  );
};
