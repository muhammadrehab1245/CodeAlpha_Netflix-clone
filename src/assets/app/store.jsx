import { configureStore } from "@reduxjs/toolkit";
import Movieslice from "../features/movies/Movieslice";

export const store = configureStore({
  reducer: {
    movies: Movieslice,
  },
});
