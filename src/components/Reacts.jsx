import React from "react";
import { useDispatch } from "react-redux";
import IconButton from "@mui/material/IconButton";
import { reactionAdded } from "../assets/features/movies/Movieslice";
import { AiFillLike, AiFillDislike } from "react-icons/ai";

export const Reacts = ({ post, path }) => {
  const dispatch = useDispatch();
  const reactions = {
    like: <AiFillLike />,
    dislike: <AiFillDislike />,
  };

  const reactBtn = Object.entries(reactions).map(([name, emoji]) => {
    return (
      <IconButton
        size="medium"
        edge="end"
        color="inherit"
        sx={{
          color: `${post.reactions[name] === true ? "#f44336" : "inherit"}`,
        }}
        key={name}
        type="button"
        onClick={() =>
          dispatch(
            reactionAdded({ cardId: post.id, reaction: name, path: path })
          )
        }
      >
        <div>
          {emoji} {post.reactions[name]}
        </div>
      </IconButton>
    );
  });

  return <div>{reactBtn}</div>;
};
