import React from "react";
import { Link } from "react-router-dom"; // Make sure this is imported
import BigButtons from "./BigButtons";

export default function Header() {
  return (
    <div>
      <h1>My Underground Events</h1>
      <BigButtons />
    </div>
  );
}
