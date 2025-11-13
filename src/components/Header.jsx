import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <h1 className="logo">Targilim</h1>

      <nav className="nav">
        



        <NavLink to="/Products" className="link">
          Products
        </NavLink>

        <NavLink to="/Books" className="link">
          Books
        </NavLink>

        <NavLink to="/Student" className="link">
          Students
        </NavLink>

           <NavLink to="/movies" className="link">
          Movies
        </NavLink>

        <NavLink to="/useeffect" className="link">
          Clock
        </NavLink>

        <NavLink to="/useeffect2" className="link">
          use-effect one
        </NavLink>

        <NavLink to="/useeffect3" className="link">
          use-effect two
        </NavLink>

        <NavLink to="/userlist1" className="link">
          User List
        </NavLink>

  
      </nav>
    </header>
  );
};

export default Header;
