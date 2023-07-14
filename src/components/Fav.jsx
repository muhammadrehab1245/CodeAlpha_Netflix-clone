import React from "react";
import { removeFav } from "../assets/features/movies/Movieslice";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea, CardActions } from "@mui/material";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { useDispatch } from "react-redux";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
export const Fav = ({ movie }) => {
  const dispatch = useDispatch();
  return (
    <>
      <Grid item xs={8} sm={4} md={3}>
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
              <Stack alignItems="center">
                <Typography
                  fontSize="14px"
                  gutterBottom
                  variant="h5"
                  component="div"
                >
                  {movie.Title}
                </Typography>
              </Stack>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Stack width="100%" alignItems="center">
              <Button
                onClick={() => dispatch(removeFav(movie))}
                sx={{
                  backgroundColor: "red",
                  color: "black",
                  "&:hover": {
                    backgroundColor: "#ef5350",
                  },
                }}
                variant="contained"
              >
                Remove
              </Button>
            </Stack>
          </CardActions>
        </Card>
      </Grid>
    </>
  );
};
