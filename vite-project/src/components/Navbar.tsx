import React from "react";
import logo from "/Group 14040.png";
import { FaSearch } from "react-icons/fa";

const NavbarComponent: React.FC = () => {
  return (
    <header className="navbar">
      <div className="navbar-logo">
        <img src={`${logo}`} alt="OutLearn Logo" />
      </div>
      <nav className="navbar-links">
        <ul className="left-links">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/courses">Courses</a>
          </li>
          <li>
            <a href="/dashboard">My Profile</a>
          </li>
        </ul>
        <ul className="right-links">
          <li>
            <a href="/search">
              <FaSearch />
            </a>
          </li>
          <li>
            <a href="/login">Login</a>
          </li>
          <li>
            <a href="/signup" className="cta-button">
              Sign Up
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default NavbarComponent;
