// Navbar.jsx

import React from "react";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import navbarStyles from "./Navbar.module.css";
import { CiSearch } from "react-icons/ci";
import { BsBookmarkPlusFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../../context/UserContext";
import SearchMovies from "../searchResults/SearchMovies";
function Navbar() {
  const [searchQuery, setSearchQuery] = useState("");
  const userName = localStorage.getItem("user name");
  const navigate = useNavigate();

  //=========> Handler Functions <==========
  const handleLogin = () => {
    navigate("/auth/login");
  };

  const handleRegister = () => {
    navigate("/auth/register");
  };

  const handleAddMovie = () => {
    navigate("/movie/add");
  };
  const handleSearch = () => {
    navigate(`/movie/${encodeURIComponent(searchQuery)}`);
  };
  return (
    <nav className={navbarStyles.nav}>
      <div className={navbarStyles.logo}>
        <Link to="/">Movify</Link>
      </div>
      <div className={navbarStyles.navSearchForm}>
        <input
          placeholder="Search Movies"
          className={navbarStyles.searchBar}
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onKeyPress={(e) => {
            if (e.key === "Enter") {
              handleSearch();
            }
          }}
        ></input>
        <img
          className={navbarStyles.searchButton}
          src="/icons/search.svg"
          alt="search"
        />
      </div>
      {/* <div className={navbarStyles.searchedMovies}>
        <SearchMovies />
      </div> */}

      <div className={navbarStyles.authButtons}>
        <div className={navbarStyles.mobileSearch}>
          <CiSearch style={{ width: "3rem", height: "3rem" }} />
        </div>
        {userName ? (
          <>
            <div onClick={handleAddMovie} className={navbarStyles.watchList}>
              <BsBookmarkPlusFill style={{ width: "30px", height: "30px" }} />
              <p className={navbarStyles.watchListText}>Add Movie</p>
            </div>
            <p className={navbarStyles.userName}> {userName}</p>
            <button onClick={handleLogin} className={navbarStyles.login}>
              logout
            </button>
          </>
        ) : (
          <>
            <button onClick={handleRegister} className={navbarStyles.signup}>
              Signup
            </button>
            <button onClick={handleLogin} className={navbarStyles.login}>
              login
            </button>
          </>
        )}
      </div>

      {/* <ul className={navbarStyles.navLinks}>
        <li>
          <Link to="/movies">Movies</Link>
        </li>
        <li>
          <Link to="/tv-shows">TV Shows</Link>
        </li>
        <li>
          <Link to="/favorites">Favorites</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
      </ul> */}
    </nav>
  );
}

export default Navbar;
