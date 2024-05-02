// Navbar.jsx

import React from "react";
import { Link } from "react-router-dom";
import navbarStyles from "./Navbar.module.css";
import { CiSearch } from "react-icons/ci";
function Navbar() {
  return (
    <nav className={navbarStyles.nav}>
      <div className={navbarStyles.logo}>
        <Link to="/">Movify.com</Link>
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

        <button className={navbarStyles.signup}>Signup</button>
        <button className={navbarStyles.login}>login</button>
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
