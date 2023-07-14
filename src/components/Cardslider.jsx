import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea, CardActions } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import { AiFillInfoCircle } from "react-icons/ai";
import { VscAdd } from "react-icons/vsc";
import Typography from "@mui/material/Typography";
import { Reacts } from "./Reacts";
import { useLocation, useNavigate } from "react-router-dom";
import { Modalfetch } from "./Modalfetch";
import { useDispatch } from "react-redux";
import { addinFav } from "../assets/features/movies/Movieslice";
export const Cardslider = ({ movie }) => {
  const path = useLocation();
  const dispatch = useDispatch();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const navigate = useNavigate();

  const addfav = (movie) => {
    dispatch(addinFav(movie));
    navigate("/my list");
  };

  return (
    <>
      <Card
        sx={{ backgroundColor: "#424242", color: "white", marginLeft: "6px" }}
      >
        <CardActionArea>
          <CardMedia
            component="img"
            height="130"
            width="350px"
            image={movie.Poster}
          />
          <CardContent>
            <Typography
              fontSize="14px"
              gutterBottom
              variant="h5"
              component="div"
            >
              {movie.Title}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Reacts path={path.pathname} post={movie} />

          <IconButton
            onClick={() => dispatch(() => addfav(movie))}
            size="medium"
            edge="end"
            color="inherit"
          >
            <VscAdd />
          </IconButton>
          <IconButton
            size="medium"
            edge="end"
            onClick={handleOpen}
            color="inherit"
          >
            <AiFillInfoCircle />
          </IconButton>
        </CardActions>
      </Card>
      ;
      <Modalfetch open={open} handleClose={handleClose} details={movie} />
    </>
  );
};
