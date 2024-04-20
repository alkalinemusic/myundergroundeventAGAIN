import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import "./index.css";
import "./App.css";
// Make sure to uncomment and import these components if they are used.
// import Home from "./components/Home";
// import About from "./components/About";

function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        {/* Ensure these are using the `element` prop for React Router v6 */}
        {/* <Route path="/about" element={<About />} /> */}
        {/* <Route path="/" element={<Home />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
