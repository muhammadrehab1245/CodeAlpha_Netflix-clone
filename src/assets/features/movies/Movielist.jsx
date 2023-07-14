import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Movieslist,
  fetchMovies,
  getMoviesError,
  getMoviesStatus,
} from "./Movieslice";
import { Typography } from "@mui/material";
import { useEffect } from "react";
import { Cardslider } from "../../../components/Cardslider";
import { Slidercomp } from "../../../components/Slidercomp";
export const Movielist = () => {
  const dispatch = useDispatch();
  const movies = useSelector(Movieslist);
  const status = useSelector(getMoviesStatus);
  const error = useSelector(getMoviesError);
  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchMovies());
    }
  }, [status, dispatch]);
  let content1, content2, content3, content4, content5;
  if (status === "loading") {
    content1 = <p>"Loading..."</p>;
    content2 = <p>"Loading..."</p>;
    content3 = <p>"Loading..."</p>;
    content4 = <p>"Loading..."</p>;
    content5 = <p>"Loading..."</p>;
  } else if (status === "succeeded") {
    content1 = movies.map((movie) =>
      movie.Category === "new" ? (
        <Cardslider key={movie.id} movie={movie} />
      ) : (
        ""
      )
    );
    content2 = movies.map((movie) =>
      movie.Category === "action" ? (
        <Cardslider key={movie.id} movie={movie} />
      ) : (
        ""
      )
    );
    content3 = movies.map((movie) =>
      movie.Category === "popular" ? (
        <Cardslider key={movie.id} movie={movie} />
      ) : (
        ""
      )
    );
    content4 = movies.map((movie) =>
      movie.Category === "blockbuster" ? (
        <Cardslider key={movie.id} movie={movie} />
      ) : (
        ""
      )
    );
    content5 = movies.map((movie) =>
      movie.Category === "epic" ? (
        <Cardslider key={movie.id} movie={movie} />
      ) : (
        ""
      )
    );
  } else if (status === "failed") {
    content1 = <p>{error}</p>;
    content2 = <p>{error}</p>;
    content3 = <p>{error}</p>;
    content4 = <p>{error}</p>;
    content5 = <p>{error}</p>;
  }

  return (
    <div style={{ marginTop: "64px", overflow: "hidden" }}>
      <Typography
        margin="12px 20px"
        fontWeight="600"
        fontSize="1.4rem"
        color="white"
      >
        New Releases
      </Typography>
      <Slidercomp content={content1} />
      <Typography
        margin="22px 20px"
        fontWeight="600"
        fontSize="1.4rem"
        color="white"
      >
        Action Movies
      </Typography>
      <Slidercomp content={content2} />
      <Typography
        margin="22px 20px"
        fontWeight="600"
        fontSize="1.4rem"
        color="white"
      >
        Popular on Netflix
      </Typography>
      <Slidercomp content={content3} />
      <Typography
        margin="22px 20px"
        fontWeight="600"
        fontSize="1.4rem"
        color="white"
      >
        Blockbuster Movies
      </Typography>
      <Slidercomp content={content4} />
      <Typography
        margin="22px 20px"
        fontWeight="600"
        fontSize="1.4rem"
        color="white"
      >
        Epics
      </Typography>
      <Slidercomp content={content5} />
    </div>
  );
};
