import React from "react";
import Box from "@mui/material/Box";
import ImageListItem from "@mui/material/ImageListItem";
import Homephoto from "../assets/home.jpg";
import Homelogo from "../assets/homeTitle.webp";
import { Button, Stack } from "@mui/material";
import { AiFillPlayCircle, AiFillInfoCircle } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { Modalcomp } from "./Modalcomp";
export const Homepage = () => {
  const navigate = useNavigate();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Box
      sx={{
        height: "109",
      }}
    >
      <Stack sx={{ position: "relative" }}>
        <ImageListItem sx={{ filter: "brightness(70%)" }}>
          <img src={Homephoto} />
        </ImageListItem>
        <Stack
          sx={{ bottom: { xs: "20px", sm: "100px" }, position: "absolute" }}
        >
          <Stack>
            <ImageListItem
              sx={{ marginLeft: { xs: "1rem", md: "4.9rem" }, width: "60%" }}
            >
              <img src={Homelogo} />
            </ImageListItem>
          </Stack>
          <Stack
            spacing={2}
            sx={{
              marginTop: { xs: ".5rem", md: "1.6rem" },
              marginLeft: { xs: "1.5rem", md: "4.3rem" },
            }}
            direction="row"
          >
            <Button
              variant="outlined"
              sx={{
                "&:hover": {
                  backgroundColor: "#9fa8da",
                  borderColor: "black",
                },
                backgroundColor: "silver",
                color: "black",
                fontSize: { xs: "10px", md: "16px" },
              }}
              onClick={() => navigate("/player")}
              startIcon={<AiFillPlayCircle />}
            >
              Play
            </Button>
            <Button
              onClick={handleOpen}
              variant="outlined"
              sx={{
                "&:hover": {
                  backgroundColor: "#212121",
                  borderColor: "black",
                },
                backgroundColor: "#424242",
                color: "white",
                fontSize: { xs: "10px", md: "16px" },
              }}
              startIcon={<AiFillInfoCircle />}
            >
              More info
            </Button>
          </Stack>
        </Stack>
      </Stack>
      <Modalcomp open={open} handleClose={handleClose} />
    </Box>
  );
};
