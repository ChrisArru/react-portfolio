import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";

import "./App.css";
import About from "./views/About";
import Contact from "./views/Contact";
import Footer from "./views/Footer";
import Header from "./views/Header";
import Main from "./views/Main";
import Work from "./views/Work";
import Technologies from "./views/Technologies";

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
    console.log(reveals);
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

  return (
    <div className="App">
      <Header />
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
