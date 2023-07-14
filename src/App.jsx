import { Stack } from "@mui/material";
import "./App.css";
import { Home } from "./pages/Home";
import { Player } from "./pages/Player";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Tvshows } from "./pages/Tvshows";
import { Navbar } from "./components/Navbar";
import { AllMovies } from "./pages/AllMovies";
import { List } from "./pages/List";
function App() {
  return (
    <Stack sx={{ backgroundColor: "black" }}>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route index element={<Home />} />
          <Route path="/player" element={<Player />} />
          <Route path="/tv shows" element={<Tvshows />} />
          <Route path="/movies" element={<AllMovies />} />
          <Route path="/my list" element={<List />} />
        </Routes>
      </BrowserRouter>
    </Stack>
  );
}

export default App;
