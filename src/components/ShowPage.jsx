import React from "react";
import styles from "../styles/show.module.css";
import Link from "next/link";
import Rating from "./Rating";
import Head from "next/head";

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
  const daysString =
    schedule?.days?.length === 1
      ? `${schedule.days[0]}s`
      : schedule?.days?.join(", ");
  const [hours, minutes] = schedule?.time.split(":");
  const scheduleString = `${daysString} at ${hours}:00 (${minutes} min)`;

  return (
    <>
      <Head>
        <title>{name}</title>
        <meta name="description" content={summary} />
      </Head>
      <div className={styles.main}>
        <div className={styles.left}>
          <img
            className={styles.image}
            src={image?.medium || image?.original}
            alt={name}
          />
          {summary && (
            <div
              className={styles.description}
              dangerouslySetInnerHTML={{ __html: summary }}
            />
          )}
        </div>
        <div className={styles.right}>
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
          {genres?.length && (
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
        </div>
      </div>
    </>
  );
};
