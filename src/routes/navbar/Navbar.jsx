import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="navbar">
        <ul>
          <li>
            <Link style={{ textDecoration: "none" }} to="/">
              Home
            </Link>
          </li>
          <li>
            <Link style={{ textDecoration: "none" }} to="posts">
              Posts
            </Link>
          </li>
          <li>
            <Link style={{ textDecoration: "none" }} to="gallery">
              Gallery
            </Link>
          </li>
          <li>
            <Link style={{ textDecoration: "none" }} to="contacts">
              Contacts
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
