import React from "react";
import "./Header.css";

const Header = () => {
  window.onscroll = function () {
    const header = document.querySelector(".navbar");
    var top = window.scrollY;
    if (top >= 100) {
      header.classList.add("navbarDark");
    } else {
      header.classList.remove("navbarDark");
    }
  };

  return (
    <nav class="navbar navbar-expand-lg fixed-top navbar-light bg-light navbarScroll">
      <div class="container-fluid">
        <p class="navbar-brand" href="#">
          Christian Arruzza
        </p>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item active">
              <a class="nav-link" href="#home">
                Home
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#about">
                About
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#technologies">
                Technogies
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#work">
                Work
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#contact">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
export default Header;
