import Navbar from "../../components/ui/navbar/Navbar";
import AddMovieForm from "../../components/ui/addMovie/AddMovieForm";
import Footer from "../../components/ui/footer/Footer";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
function AddMovie() {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  useEffect(() => {
    if (!token) {
      navigate("/auth/login");
    }
  }, [token, navigate]);

  if (!token) {
    return null;
  }

  return (
    <>
      <Navbar />
      <AddMovieForm />
      <Footer />
    </>
  );
}

export default AddMovie;
