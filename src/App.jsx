import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Pages/Home";
import MovieDetails from "./Pages/MovieDetails";

const App = () => {
  return (
    <BrowserRouter basename="/FILM-BROS-">
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/movie/:id" element={<MovieDetails />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;