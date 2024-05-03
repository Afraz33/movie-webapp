import { useState, useEffect } from "react";

//project import
import Navbar from "../../components/ui/navbar/Navbar";
import Hero from "../../components/ui/hero/Hero";
import Footer from "../../components/ui/footer/Footer";
import AllMoviesList from "../../components/ui/allMovies/AllMoviesList";
function Home() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchMovies();
  }, []);

  const fetchMovies = async () => {
    try {
      const response = await fetch(`http://localhost:8000/movies`);
      if (!response.ok) {
        throw new Error("Failed to fetch movies");
      }
      const data = await response.json();

      setMovies(data);
    } catch (error) {
      console.error("Error fetching movies:", error);
    }
  };

  return (
    <>
      <Navbar />
      <Hero />
      <AllMoviesList movies={movies} />
      <Footer />
    </>
  );
}

export default Home;
