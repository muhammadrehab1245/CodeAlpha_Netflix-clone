import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Stack from "@mui/material/Stack";
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

export const Modalcomp = ({ handleClose, open }) => {
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <img
          width="340px"
          src="https://upload.wikimedia.org/wikipedia/commons/3/38/Stranger_Things_logo.png"
        />
        <Typography id="modal-modal-description" sx={{ mt: 3 }}>
          Stranger Things is an American science fiction horror drama television
          series created by the Duffer Brothers, who also serve as showrunners
          and are executive producers along with Shawn Levy and Dan Cohen.
          Produced by Monkey Massacre Productions and Levy's 21 Laps
          Entertainment, the first season was released on Netflix on July 15,
          2016. Its second, third, and fourth seasons followed in October 2017,
          July 2019, and May and July 2022, respectively. In February 2022, it
          was renewed for a fifth and final season.
        </Typography>
        <Stack mt="15px" display="flex" alignItems="center">
          <Button
            sx={{ backgroundColor: "red", color: "white", width: 150 }}
            onClick={handleClose}
          >
            Close
          </Button>
        </Stack>
      </Box>
    </Modal>
  );
};
