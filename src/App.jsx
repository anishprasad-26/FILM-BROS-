import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Movierow from "./Components/Movierow";
import Tvrow from "./Components/Tvrow";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Movierow title="Trending Now" category="popular"/>
      <Movierow title="Top-Rated" category="top_rated"/>
      <Tvrow title="Popular in TV " category="popular"/>
      
    </>
  );
}

export default App;
