import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="navbar navbar-expand-sm bg-light justify-content-center">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link" to="welcom">
            Welcom
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="histogram-equalization">
            Histogram Equalization
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="soble-and-laplace">
            Soble And Lablace
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="fourier">
            Fourier
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="sAndP">
            Salt And Pepper
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="periodic">
            Periodic
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
