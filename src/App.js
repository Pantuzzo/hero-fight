import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./Components/Header";
import FooterCombat from "./Components/FooterCombat";
import Home from "./Pages/Home";
import { HeroProvider } from "./HeroContext";

function App() {
  return (
    <HeroProvider>
      <Router>
        <div className="App">
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
          <FooterCombat />
        </div>
      </Router>
    </HeroProvider>
  );
}

export default App;
