import Navbar from "../../components/ui/navbar/Navbar";
import Hero from "../../components/ui/hero/Hero";
import Footer from "../../components/ui/footer/Footer";
import AllMoviesList from "../../components/ui/allMovies/AllMoviesList";
function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <AllMoviesList />
      <Footer />
    </>
  );
}

export default Home;
