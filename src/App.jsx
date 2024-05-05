import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import BigButtons from "../src/components/BigButtons";
import About from "./pages/About";
import FindEvent from "./pages/FindEvent";
import PostEvent from "./pages/PostEvent";
import "./index.css";
import "./App.css";
import EventDetails from "./pages/EventDetails";
// Make sure to uncomment and import these components if they are used.
// import Home from "./components/Home";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path={"/"} element={<BigButtons />} />
        {/* Ensure these are using the `element` prop for React Router v6 */}
        <Route path={"/about"} element={<About />} />
        <Route path={"/findevent"} element={<FindEvent />} />
        <Route path={"/postevent"} element={<PostEvent />} />
        <Route path={"/eventDetails/id"} element={<EventDetails />} />
        {/* <Route path="/" element={<Home />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
