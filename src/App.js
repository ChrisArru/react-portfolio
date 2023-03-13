import "bootstrap/dist/css/bootstrap.min.css";
//import "bootstrap";

import "./App.css";
import About from "./views/About";
import Contact from "./views/Contact";
import Footer from "./views/Footer";
import Header from "./views/Header";
import Main from "./views/Main";
import Work from "./views/Work";
import Technologies from "./views/Technologies";
import { useState } from "react";

/* export const theme = signal("dark"); */

function App() {
  window.onscroll = function () {
    const header = document.querySelector(".navbar");
    var top = window.scrollY;
    if (top >= 100) {
      header.classList.add("navbarDark");
    } else {
      header.classList.remove("navbarDark");
    }

    var reveals = document.querySelectorAll(".reveal");

    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;

      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  };

  const [theme, setTheme] = useState("dark");

  const onChangeThemeHandler = () => {
    /* if (theme.value === "dark") {
      theme.value = "light";
    } else {
      theme.value = "dark";
    } */
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  return (
    <div className="App text-body bg-body" data-bs-theme={theme}>
      <Header changeTheme={onChangeThemeHandler} />
      {/* <button
        onClick={changeThemeHandler}
        type="button"
        class="btn btn-primary"
        style={{ position: "relative", top: "100px" }}
      >
        Cambia tema
      </button> */}

      <Main />
      <About />
      <Technologies />
      <Work />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
