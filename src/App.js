import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";
import About from "./views/About";
import Header from "./views/Header";
import Main from "./views/Main";

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <About />
    </div>
  );
}

export default App;
