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
      const apiUrl = `http://localhost:8000/movies/details?title=${encodeURIComponent(
        title
      )}`;

      // Fetch movie data from the backend
      const response = await fetch(apiUrl);

      const data = await response.json();
      console.log(data);
      if (data === null) {
        setNoMoviesFound(true);
        return;
      }
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

        <div
          style={{
            height: "82vh",
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <p
            style={{
              fontSize: "2rem",
              color: "white",
              textAlign: "center",
            }}
          >
            No movies found for "{" "}
            <span style={{ color: "rgb(225, 29, 72)" }}>{title}</span> "
          </p>
        </div>
        <Footer />
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
