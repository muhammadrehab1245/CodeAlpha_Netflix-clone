import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea, CardActions } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import { AiFillInfoCircle } from "react-icons/ai";
import Grid from "@mui/material/Grid";
import { VscAdd, VscRemove } from "react-icons/vsc";
import Typography from "@mui/material/Typography";
import { Reacts } from "./Reacts";
import { useDispatch } from "react-redux";
import { Modalfetch } from "./Modalfetch";
import { addinFav } from "../assets/features/movies/Movieslice";
import { useNavigate } from "react-router-dom";

export const Typesfilter = ({ path, tv }) => {
  const dispatch = useDispatch();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const navigate = useNavigate();
  const addfav = (tv) => {
    dispatch(addinFav(tv));
    navigate("/my list");
  };
  return (
    <>
      <Grid item xs={8} sm={4} md={3}>
        <Card
          sx={{
            backgroundColor: "#424242",
            color: "white",
            marginLeft: { xs: "1px", md: "8px" },
          }}
        >
          <CardActionArea>
            <CardMedia
              component="img"
              height="110"
              width="150px"
              image={tv.Poster}
            />
            <CardContent>
              <Typography
                fontSize={{ xs: "10px", md: "14px" }}
                gutterBottom
                variant="h5"
                component="div"
              >
                {tv.Title}
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Reacts path={path} post={tv} />
            <IconButton
              onClick={() => dispatch(() => addfav(tv))}
              size="medium"
              edge="end"
              color="inherit"
            >
              <VscAdd />
            </IconButton>

            <IconButton
              onClick={handleOpen}
              size="medium"
              edge="end"
              color="inherit"
            >
              <AiFillInfoCircle />
            </IconButton>
          </CardActions>
        </Card>
      </Grid>
      <Modalfetch open={open} handleClose={handleClose} details={tv} />
    </>
  );
};
