// src/components/HomePage.js
import React from "react";
import { Link } from "react-router-dom";
import "./components.css"

function HomePage() {
  return (
    <div className="homes">
      <div className="home">
      <h2>Welcome to Personal Landing Page Generator</h2>
      <Link to="/create">
        <button>Create Your Landing Page</button>
      </Link>
    </div>
    </div>
  );
}

export default HomePage;
