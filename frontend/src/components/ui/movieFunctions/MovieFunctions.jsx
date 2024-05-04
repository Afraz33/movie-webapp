import { Link } from "react-router-dom";
import styles from "./MovieFunctions.module.css";
import { useNavigate } from "react-router-dom";

//toast
import { toast, ToastContainer } from "react-toastify";

// MovieFunctions Component
function MovieFunctions({ movieTitle }) {
  const navigate = useNavigate();

  // Function to navigate to add movie page
  const handleNavigate = () => {
    const token = localStorage.getItem("token");
    if (!token) {
      notifyInfo();
      setTimeout(() => {
        navigate("/auth/login");
      }, 1500);
      return;
    }
    navigate("/movie/add");
  };

  // Function to handle movie deletion
  const handleDelete = async () => {
    const token = localStorage.getItem("token");
    if (!token) {
      notifyInfo();
      setTimeout(() => {
        navigate("/auth/login");
      }, 2000);

      return;
    }
    // Confirm deletion
    if (window.confirm("Do you want to delete this movie?")) {
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
          // Movie deleted successfully
          notifySuccess();

          setTimeout(() => {
            navigate("/");
          }, 2000);
        } else {
          const data = await response.json();
          // Failed to delete movie
          alert(data.message || "Failed to delete movie");
        }
      } catch (error) {
        // Error occurred while deleting movie
        console.error("Error deleting movie:", error);
        alert("An unexpected error occurred");
      }
    }
  };

  const notifyInfo = () => {
    toast.info("You need to login first", {
      position: "top-center",
    });
  };
  const notifySuccess = () => {
    toast.success("Movie Deleted", {
      position: "top-center",
    });
  };

  return (
    <>
      <div className={styles.container}>
        {/* Button to navigate to add movie page */}
        <button onClick={handleNavigate} className={styles.button}>
          Add a movie
        </button>
        {/* Button to delete the movie */}
        <button onClick={handleDelete} className={styles.button}>
          Delete this movie
        </button>
      </div>

      <ToastContainer autoClose={1500} />
    </>
  );
}

export default MovieFunctions;
