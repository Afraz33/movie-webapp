import { useState, useEffect } from "react";

//project import
import MovieHero from "../../components/layouts/movieHero/MovieHero";
import Navbar from "../../components/ui/navbar/Navbar";
import Footer from "../../components/ui/footer/Footer";
import MovieFunctions from "../../components/ui/movieFunctions/MovieFunctions";
import MovieReviewsList from "../../components/ui/movieReviewsList/MovieReviewsList";

import { useParams } from "react-router-dom";
function MovieInfo() {
  const { title } = useParams();
  const [movieData, setMovieData] = useState(null);
  const [noMoviesFound, setNoMoviesFound] = useState(false); // State to indicate no movies found

  const fetchMovieData = async (title, setMovieData, setNoMoviesFound) => {
    try {
      const apiUrl = `http://localhost:8000/movies/search?title=${encodeURIComponent(
        title
      )}`;

      // Fetch movie data from the backend
      const response = await fetch(apiUrl);

      if (response.status === 404) {
        setNoMoviesFound(true);
        return;
      }
      const data = await response.json();

      setMovieData(data);
      setNoMoviesFound(false);
    } catch (error) {
      console.error("Error fetching movie data:", error);
    }
  };

  useEffect(() => {
    // Call the function to fetch movie data
    fetchMovieData(title, setMovieData, setNoMoviesFound);
  }, [title, setMovieData]);

  if (noMoviesFound) {
    return (
      <>
        <Navbar />

        <p style={{ fontSize: "2rem", color: "white", textAlign: "center" }}>
          No movies found.
        </p>
      </>
    );
  }
  return (
    <>
      {movieData && (
        <>
          {" "}
          <Navbar />
          <MovieHero movieData={movieData} />
          <MovieFunctions movieTitle={movieData.title} />
          <MovieReviewsList movieTitle={movieData.title} />
          <Footer />
        </>
      )}
    </>
  );
}

export default MovieInfo;
