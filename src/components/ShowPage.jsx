import React from "react";
import styled from "@emotion/styled";
import Link from "next/link";
import Rating from "./Rating";

const Conatiner = styled.div`
  display: flex;
  margin-top: 100px;
  @media (max-width: 700px) {
    margin-top: 50px;
    flex-direction: column;
  }
`;

const LeftContainer = styled.div`
  display: flex;
  @media (max-width: 700px) {
    flex-direction: column;
    align-items: center;
  }
`;

const RightContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 500px;
  @media (max-width: 700px) {
    margin-top: 20px;
    width: 300px;
  }
`;

const StyledImage = styled.img`
  width: 300px;
  height: 380px;
  margin-top: 18px;
  margin-right: 32px;
  @media (max-width: 700px) {
    margin-right: 0px;
  }
`;

const Description = styled.div`
  width: 500px;
  height: 300px;
  margin-right: 38px;
  @media (max-width: 700px) {
    width: 300px;
    height: 99px;
    margin-left: 0px;
    margin-right: 0px;
    overflow-y: scroll;
    margin-top: 20px;
  }
`;

export const ShowPage = ({
  show: {
    type,
    genres = [],
    rating = {},
    summary,
    image,
    schedule = {},
    name,
    status,
    officialSite,
    weight,
  },
}) => {
  const isSchedule = schedule?.days?.length > 0;
  const isGenres = genres?.length > 0;
  const daysString =
    schedule?.days?.length === 1
      ? `${schedule.days[0]}s`
      : schedule?.days?.join(", ");
  const [hours, minutes] = schedule?.time.split(":");
  const scheduleString = `${daysString} ${
    hours && minutes ? `at ${hours}:00 (${minutes} min)` : ""
  }`;

  return (
    <Conatiner>
      <LeftContainer>
        <StyledImage src={image?.medium || image?.original} alt={name} />
        {summary && (
          <Description dangerouslySetInnerHTML={{ __html: summary }} />
        )}
      </LeftContainer>
      <RightContainer>
        <h3>Show Info</h3>
        {isSchedule && (
          <p>
            <b>Schedule: </b>
            {scheduleString}
          </p>
        )}
        <p>
          <b>Status: </b>
          {status}
        </p>
        <p>
          <b>Show Type: </b>
          {type}
        </p>
        {isGenres && (
          <p>
            <b>Genres: </b>
            {genres.join(" | ")}
          </p>
        )}
        {officialSite && (
          <p>
            <b>Official cite: </b>
            <Link
              href={`${officialSite}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              {officialSite}
            </Link>
          </p>
        )}
        {rating.average && (
          <div>
            <Rating value={rating.average} />
            {` ${rating.average} (${weight} votes)`}
          </div>
        )}
      </RightContainer>
    </Conatiner>
  );
};
