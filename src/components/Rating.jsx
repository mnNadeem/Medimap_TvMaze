import React from "react";
import styled from "@emotion/styled";

const StarIcon = styled.span`
  font-size: 1.5em;
  color: #ffc107;
  cursor: pointer;
`;

const EmptyStarIcon = styled(StarIcon)`
  color: #ccc;
`;

const RatingContainer = styled.div`
  display: inline-flex;
`;

const Rating = React.memo(({ value }) => {
  const ratingValue = Math.round(value);
  const stars = Array(10)
    .fill()
    .map((_, i) => {
      const Icon = i < ratingValue ? StarIcon : EmptyStarIcon;
      return <Icon key={i + 1}>{i < ratingValue ? "★" : "☆"}</Icon>;
    });

  return <RatingContainer>{stars}</RatingContainer>;
});

Rating.displayName = "Rating";

export default Rating;
