import MovieHero from "../../components/layouts/movieHero/MovieHero";
import Navbar from "../../components/ui/navbar/Navbar";
import Footer from "../../components/ui/footer/Footer";
import MovieFunctions from "../../components/ui/movieFunctions/MovieFunctions";
import MovieReviewsList from "../../components/ui/movieReviewsList/MovieReviewsList";
function MovieInfo() {
  return (
    <>
      <Navbar />
      <MovieHero />
      <MovieFunctions />
      <MovieReviewsList />
      <Footer />
    </>
  );
}

export default MovieInfo;
