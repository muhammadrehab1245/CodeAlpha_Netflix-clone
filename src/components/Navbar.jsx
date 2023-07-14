import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import ImageListItem from "@mui/material/ImageListItem";
import { AiOutlinePoweroff } from "react-icons/ai";
import { BiMenuAltLeft } from "react-icons/bi";
import { Drawer } from "@mui/material";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
const pages = ["Home", "Tv Shows", "Movies", "My List"];

export const Navbar = () => {
  const location = useLocation();

  const [state, setState] = React.useState({
    top: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const navlist = (anchor) => (
    <Box
      sx={{
        width: anchor === "top" || anchor === "bottom" ? "auto" : 250,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
      role="presentation"
      onClick={toggleDrawer("top", false)}
      onKeyDown={toggleDrawer("top", false)}
    >
      <ImageListItem
        sx={{ width: "100%", display: { xs: "block", sm: "none" }, width: 140 }}
      >
        <img
          src={
            "https://www.edigitalagency.com.au/wp-content/uploads/Netflix-logo-red-black-png.png"
          }
          alt="Netflixlogo"
        />
      </ImageListItem>
      <Box>
        {pages.map((pages) => (
          <Box
            sx={{
              marginTop: "12px",
              display: "flex",
              justifyContent: "center",
            }}
            key={pages}
          >
            <Link to={`/${pages !== "Home" ? pages.toLowerCase() : ""}`}>
              <Button sx={{ color: "white" }}>{pages}</Button>
            </Link>
          </Box>
        ))}
      </Box>
    </Box>
  );

  const [scrollcolor, setscrollcolor] = useState("black");

  let queryfirst = window.matchMedia("(min-width: 1000px)");
  let querysecond = window.matchMedia("(min-width: 500px)");
  let querythird = window.matchMedia("(min-width: 150px)");

  let navtransparent = (min, max) => {
    window.onscroll = () => {
      if (location.pathname === "/") {
        if (window.pageYOffset > min && window.pageYOffset < max) {
          setscrollcolor("transparent");
        } else {
          setscrollcolor("black");
        }
      }
    };
  };

  if (queryfirst.matches) {
    // If media query matches
    navtransparent(70, 520);
  } else if (querysecond.matches) {
    navtransparent(20, 300);
  } else if (querythird.matches) {
    navtransparent(0, 180);
  }

  return (
    <>
      <CssBaseline />
      <AppBar sx={{ backgroundColor: `${scrollcolor}` }} position="sticky">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <ImageListItem
              sx={{
                display: { xs: "none", sm: "block" },
                width: { sm: 220, lg: 140 },
              }}
            >
              <img
                src={
                  "https://www.edigitalagency.com.au/wp-content/uploads/Netflix-logo-red-black-png.png"
                }
                alt="Netflixlogo"
              />
            </ImageListItem>
            <ImageListItem
              sx={{
                display: { xs: "flex", sm: "none" },
                width: 140,
              }}
            ></ImageListItem>
            <Box
              sx={{
                marginLeft: 3,
                flexGrow: 1,
                display: { xs: "none", sm: "flex" },
              }}
            >
              {pages.map((pages) => (
                <Link
                  key={pages}
                  to={`/${pages !== "Home" ? pages.toLowerCase() : ""}`}
                >
                  <Button
                    sx={{
                      fontSize: { xs: 10, sm: 12 },
                      my: 2,
                      color: "white",
                      display: "block",
                      marginLeft: 3,
                    }}
                  >
                    {pages}
                  </Button>
                </Link>
              ))}
            </Box>
            <Box sx={{ marginLeft: 5, display: "flex", flexDirection: "row" }}>
              <Box sx={{ flexGrow: 2 }}></Box>
              <Box
                sx={{
                  position: { xs: "absolute", sm: "static" },
                  left: { xs: "0px" },
                  bottom: { xs: "10px", sm: "0px" },
                }}
              >
                <IconButton
                  size="medium"
                  aria-label="show more"
                  aria-haspopup="true"
                  sx={{
                    color: "red",
                  }}
                >
                  <AiOutlinePoweroff />
                </IconButton>
              </Box>
            </Box>
            <Box
              sx={{
                display: { xs: "flex", sm: "none" },
                width: { xs: "100%", sm: "inherit", justifyContent: "end" },
              }}
            >
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                color="inherit"
                onClick={toggleDrawer("top", true)}
              >
                <BiMenuAltLeft />
              </IconButton>
              <Drawer
                PaperProps={{
                  sx: {
                    backgroundColor: "black",
                    color: "red",
                    height: "100",
                  },
                }}
                anchor={"top"}
                open={state["top"]}
                onClose={toggleDrawer("top", false)}
              >
                {navlist("top")}
              </Drawer>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
};
