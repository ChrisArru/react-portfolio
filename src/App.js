import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";
import About from "./views/About";
import Header from "./views/Header";
import Main from "./views/Main";
import Services from "./views/Services";

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <About />
      <Services />
    </div>
  );
}

export default App;
