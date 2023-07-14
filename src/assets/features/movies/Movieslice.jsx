import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const POSTS_URL = ` http://localhost:3000/movies`;
const ALLPOSTS_URL = ` http://localhost:3000/allmovies`;
const TVSHOWS_URL = "http://localhost:4000/tvshows";
const initialState = {
  movies: [],
  status: "idle",
  error: null,
  allmovies: [],
  allstatus: "idle",
  allerror: null,
  tvshows: [],
  tvstatus: "idle",
  tverror: null,
  favlist: localStorage.getItem("favlist")
    ? JSON.parse(localStorage.getItem("favlist"))
    : [],
  msg: [],
};

export const fetchMovies = createAsyncThunk("posts/fetchMovies", async () => {
  const response = await axios.get(POSTS_URL);
  return response.data;
});
export const fetchAllMovies = createAsyncThunk(
  "posts/fetchAllMovies",
  async () => {
    const response = await axios.get(ALLPOSTS_URL);
    return response.data;
  }
);

export const fetchTvshows = createAsyncThunk("posts/fetchTvshows", async () => {
  const response = await axios.get(TVSHOWS_URL);

  return response.data;
});

const Movieslice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    addinFav: (state, action) => {
      let existingPost = state.favlist.findIndex(
        (movies) => movies.id === action.payload.id
      );
      if (existingPost <= 0) {
        state.favlist.push(action.payload);
        localStorage.setItem("favlist", JSON.stringify(state.favlist));
      }
    },
    removeFav: (state, action) => {
      let existingPost = state.favlist.filter(
        (movie) => movie.id !== action.payload.id
      );

      state.favlist = existingPost;

      localStorage.setItem("favlist", JSON.stringify(state.favlist));
    },

    reactionAdded: (state, action) => {
      const { cardId, reaction, path } = action.payload;
      let newpath = path.replace("%20", "");
      if (newpath === "/") {
        var existingPost = state.movies.find((movies) => movies.id === cardId);
      } else if (newpath === "/movies") {
        var existingPost = state.allmovies.find(
          (movies) => movies.id === cardId
        );
      } else if (newpath === "/tvshows") {
        var existingPost = state.tvshows.find((movies) => movies.id === cardId);
      }
      if (existingPost) {
        if (reaction === "like") {
          existingPost.reactions[reaction] = !existingPost.reactions[reaction];
          existingPost.reactions["dislike"] = false;
        } else if (reaction === "dislike") {
          existingPost.reactions[reaction] = !existingPost.reactions[reaction];
          existingPost.reactions["like"] = false;
        }
      }
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchMovies.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchMovies.fulfilled, (state, action) => {
        state.status = "succeeded";
        const loadedpost = action.payload.map((item) => {
          item.reactions = {
            like: false,
            dislike: false,
          };
          return item;
        });
        state.movies = action.payload;
      })
      .addCase(fetchMovies.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(fetchAllMovies.pending, (state, action) => {
        state.allstatus = "loading";
      })
      .addCase(fetchAllMovies.fulfilled, (state, action) => {
        state.allstatus = "succeeded";
        const loadedpost = action.payload.map((item) => {
          item.reactions = {
            like: false,
            dislike: false,
          };
          return item;
        });
        state.allmovies = action.payload;
      })
      .addCase(fetchAllMovies.rejected, (state, action) => {
        state.allstatus = "failed";
        state.allerror = action.error.message;
      })
      .addCase(fetchTvshows.pending, (state, action) => {
        state.tvstatus = "loading";
      })
      .addCase(fetchTvshows.fulfilled, (state, action) => {
        state.tvstatus = "succeeded";
        const loadedpost = action.payload.map((item) => {
          item.reactions = {
            like: false,
            dislike: false,
          };
          return item;
        });
        state.tvshows = action.payload;
      })
      .addCase(fetchTvshows.rejected, (state, action) => {
        state.tvstatus = "failed";
        state.tverror = action.error.message;
      });
  },
});

export const Movieslist = (state) => state.movies.movies;
export const getMoviesStatus = (state) => state.movies.status;
export const getMoviesError = (state) => state.movies.error;
export const AllMovieslist = (state) => state.movies.allmovies;
export const AllgetMoviesStatus = (state) => state.movies.allstatus;
export const AllgetMoviesError = (state) => state.movies.allerror;
export const Tvshowslist = (state) => state.movies.tvshows;
export const TvshowsStatus = (state) => state.movies.tvstatus;
export const TvshowsError = (state) => state.movies.tverror;
export const Favmovies = (state) => state.movies.favlist;

export const { reactionAdded, addinFav, removeFav } = Movieslice.actions;
export default Movieslice.reducer;
