import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Stack from "@mui/material/Stack";
import video from "../assets/StrangerThings.mp4";
export const Modalfetch = ({ details, handleClose, open }) => {
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "black",
    color: "white",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <video height="100%" width="100%" controls>
          <source src={video} />
        </video>
        <Typography id="modal-modal-description" sx={{ mt: 3 }}>
          Year Released : {details.Year}
        </Typography>
        <Typography id="modal-modal-description" sx={{ mt: 3 }}>
          Type : {details.Category.toUpperCase()}
        </Typography>
        <Stack mt="15px" columnGap={2} display="flex" alignItems="center">
          <Button
            sx={{
              width: "130px",
              backgroundColor: "red",
              color: "white",
              "&:hover": {
                backgroundColor: "#ef5350",
              },
            }}
            onClick={handleClose}
          >
            Close
          </Button>
        </Stack>
      </Box>
    </Modal>
  );
};
