import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import navbarStyles from "./Navbar.module.css";
import { CiSearch } from "react-icons/ci";
import { BsBookmarkPlusFill } from "react-icons/bs";
import { IoIosAdd, IoMdClose } from "react-icons/io";
import { IoMdAddCircle } from "react-icons/io";
// Project imports
import SearchMovies from "../searchResults/SearchMoviesList";
import { faL } from "@fortawesome/free-solid-svg-icons";

function Navbar() {
  const [searchQuery, setSearchQuery] = useState(""); // State to store search query
  const userName = localStorage.getItem("user name"); // Retrieve user name from local storage
  const [movieData, setMovieData] = useState(null);
  const [noMoviesFound, setNoMoviesFound] = useState(false); // State to indicate no movies found
  const [searchResultsOpen, setSearchResultsOpen] = useState(false);
  const navigate = useNavigate();
  const abortController = new AbortController();
  const searchRef = useRef(null); // Reference to the search component

  //fetch movies on search
  const fetchMovieData = async (searchQuery) => {
    try {
      const apiUrl = `http://localhost:8000/movies/search?title=${encodeURIComponent(
        searchQuery
      )}`;

      // Fetch movie data from the backend
      const response = await fetch(apiUrl, { signal: abortController.signal });

      if (response.status === 404) {
        setNoMoviesFound(true);
        setMovieData(null);

        return;
      }
      const data = await response.json();

      setMovieData(data);
      console.log(data);
      setNoMoviesFound(false);
      setSearchResultsOpen(true);
    } catch (error) {
      if (error.name === "AbortError") {
        console.log("Previous request aborted");
      } else {
        console.error("Error fetching movie data:", error);
      }
    }
  };

  // Handler function to navigate to login page
  const handleLogin = () => {
    navigate("/auth/login");
  };

  // Handler function to navigate to register page
  const handleRegister = () => {
    navigate("/auth/register");
  };

  // Handler function to navigate to add movie page
  const handleAddMovie = () => {
    navigate("/movie/add");
  };

  // Handler function to handle search functionality
  const handleSearch = () => {
    const movieUrl = `/movie/${encodeURIComponent(searchQuery)}`;

    // const inputValue = e.target.value;
    if (searchQuery.length >= 3) {
      navigate(movieUrl);
    }
  };

  useEffect(() => {
    // cancel previous query if a new req is made

    //fetch data if query is greater than 3 characters
    if (searchQuery.length > 0) {
      fetchMovieData(searchQuery);
    } else {
      setMovieData(null);
    }
  }, [searchQuery]);

  // Handler function to clear local storage and logout
  const handleLogout = () => {
    localStorage.clear();
    navigate("/auth/login");
  };

  // Function to close search results when clicking outside
  const handleClickOutside = (event) => {
    if (searchRef.current && !searchRef.current.contains(event.target)) {
      setSearchResultsOpen(false);
    }
  };

  useEffect(() => {
    // Add event listener to handle clicks outside of the search component
    document.addEventListener("mousedown", handleClickOutside);

    // Cleanup function to remove event listener
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <nav className={navbarStyles.nav}>
        {/* Logo */}
        <div className={navbarStyles.logo}>
          <Link to="/">Movify</Link>
        </div>

        {/* Search Bar */}
        <div className={navbarStyles.navSearchForm} ref={searchRef}>
          <input
            placeholder="Search movies"
            className={navbarStyles.searchBar}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyPress={(e) => {
              if (e.key === "Enter") {
                handleSearch();
              }
            }}
          />
          <img
            className={navbarStyles.searchButton}
            src="/icons/search.svg"
            alt="search"
            onClick={handleSearch}
          />
        </div>

        {/* Auth Buttons */}
        <div className={navbarStyles.authButtons}>
          <div className={navbarStyles.mobileSearch}>
            <CiSearch style={{ width: "3rem", height: "3rem" }} />
          </div>
          {userName ? ( // If user is logged in
            <>
              <div onClick={handleAddMovie} className={navbarStyles.watchList}>
                <IoMdAddCircle style={{ width: "30px", height: "30px" }} />
                <p className={navbarStyles.watchListText}>Add Movie</p>
              </div>
              <p className={navbarStyles.userName}> {userName}</p>
              <button onClick={handleLogout} className={navbarStyles.login}>
                Logout
              </button>
            </>
          ) : (
            // If user is not logged in
            <>
              <button onClick={handleRegister} className={navbarStyles.signup}>
                Signup
              </button>
              <button onClick={handleLogin} className={navbarStyles.login}>
                Login
              </button>
            </>
          )}
        </div>
      </nav>
      {searchResultsOpen && movieData && (
        <div ref={searchRef} className={navbarStyles.searchedMovies}>
          <IoMdClose
            style={{
              color: "white",
              position: "absolute",
              top: "10px",
              right: "10px",
              fontSize: "20px",
              cursor: "pointer",
            }}
            onClick={() => {
              setSearchResultsOpen(false);
            }}
          />
          <SearchMovies
            setSearchResultsOpen={setSearchResultsOpen}
            movieData={movieData}
          />
        </div>
      )}
    </>
  );
}

export default Navbar;
