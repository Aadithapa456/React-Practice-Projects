import React from "react";
import NavBar from "./components/NavBar";
import Hero from "./components/hero";

const App = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 to-purple-900">
      <NavBar />
      <Hero />
    </div>
  );
};

export default App;
