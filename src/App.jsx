import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Movierow from "./Components/Movierow";
import Tvrow from "./Components/Tvrow";
import Footer from "./Components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Movierow title="Trending Now" category="popular"/>
      <Movierow title="Top-Rated" category="top_rated"/>
      <Tvrow title="Popular in TV " category="popular"/>
      <Tvrow title="Top Rated in TV " category="top_rated"/>
      <Footer/>
      
    </>
  );
}

export default App;
