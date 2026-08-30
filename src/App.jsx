import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Movierow from "./Components/Movierow";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Movierow title="Trending Now" category="popular"/>
      <Movierow title="Top-Rated" category="top_rated"/>
    </>
  );
}

export default App;
