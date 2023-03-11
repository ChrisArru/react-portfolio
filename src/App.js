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
