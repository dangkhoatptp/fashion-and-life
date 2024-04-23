import { Routes, Route } from "react-router-dom";

import { Header, Footer, Navbar } from "./components";
import { Home } from "./pages";

function App() {
  return (
    <div className="App">
      <Header />
      <Navbar />
      {/* <Routes></Routes> */}
      <Home />
      <Footer />
    </div>
  );
}

export default App;
