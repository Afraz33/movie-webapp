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

  useEffect(() => {
    const apiUrl = `http://localhost:8000/movies/search?title=${encodeURIComponent(
      title
    )}`;

    // Fetch movie data from the backend
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setMovieData(data);
      })

      .catch((error) => {
        console.error("Error fetching movie data:", error);
      });
  }, [title]);

  return (
    <>
      <Navbar />

      {movieData && (
        <>
          <MovieHero movieData={movieData} />
          <MovieFunctions movieTitle={movieData.title} />
          <MovieReviewsList movieTitle={movieData.title} />
        </>
      )}
      <Footer />
    </>
  );
}

export default MovieInfo;
