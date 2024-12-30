// src/App.js
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./components/Home";
import Form from "./components/Form";
import PreviewPage from "./components/Preview";

function App() {
  const [userDetails, setUserDetails] = useState({});

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/create" element={<Form setUserDetails={setUserDetails} />} />
        <Route path="/preview" element={<PreviewPage userDetails={userDetails} />} />
      </Routes>
    </Router>
  );
}

export default App;
