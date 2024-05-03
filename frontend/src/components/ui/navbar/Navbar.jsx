// Navbar.jsx

import React from "react";
import { Link } from "react-router-dom";
import navbarStyles from "./Navbar.module.css";
import { CiSearch } from "react-icons/ci";
import { BsBookmarkPlusFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
function Navbar() {
  const navigate = useNavigate();

  //=========> Handler Functions <==========
  const handleLogin = () => {
    navigate("/auth/login");
  };

  const handleRegister = () => {
    navigate("/auth/register");
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
        ></input>
        <img
          className={navbarStyles.searchButton}
          src="/icons/search.svg"
          alt="search"
        />
      </div>

      <div className={navbarStyles.authButtons}>
        <div className={navbarStyles.mobileSearch}>
          <CiSearch style={{ width: "3rem", height: "3rem" }} />
        </div>
        <div className={navbarStyles.watchList}>
          <BsBookmarkPlusFill style={{ width: "30px", height: "30px" }} />
          <p className={navbarStyles.watchListText}>Watch List</p>
        </div>
        <button onClick={handleRegister} className={navbarStyles.signup}>
          Signup
        </button>
        <button onClick={handleLogin} className={navbarStyles.login}>
          login
        </button>
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
