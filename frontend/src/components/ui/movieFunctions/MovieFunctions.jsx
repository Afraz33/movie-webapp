import { Link } from "react-router-dom";
import styles from "./MovieFunctions.module.css";
import { useNavigate } from "react-router-dom";

function MovieFunctions({ movieTitle }) {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate("/movie/add");
  };

  const handleDelete = async () => {
    alert("Do you want to delete this movie?");
    const token = localStorage.getItem("token");

    try {
      const response = await fetch(
        `http://localhost:8000/movies/${encodeURIComponent(movieTitle)}`,
        {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.ok) {
        alert("Movie deleted successfully");
        navigate("/");
      } else {
        const data = await response.json();
        alert(data.message || "Failed to delete movie");
      }
    } catch (error) {
      console.error("Error deleting movie:", error);
      alert("An unexpected error occurred");
    }
  };
  return (
    <div className={styles.container}>
      <button onClick={handleNavigate} className={styles.button}>
        Add a movie
      </button>
      <button onClick={handleDelete} className={styles.button}>
        Delete this movie
      </button>
    </div>
  );
}

export default MovieFunctions;
