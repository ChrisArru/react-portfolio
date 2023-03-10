import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";
import About from "./views/About";
import Contact from "./views/Contact";
import Footer from "./views/Footer";
import Header from "./views/Header";
import Main from "./views/Main";
import Portfolio from "./views/Portfolio";
import Services from "./views/Services";

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <About />
      <Services />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
