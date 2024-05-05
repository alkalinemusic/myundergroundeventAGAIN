import React from "react";
import "../CSS/SearchResults.css";

export default function SearchResults() {
  return (
    <div>
      <h3 className="search-results-h3">Results</h3>
      <div className="search-results-section">
        <div>
          <span className="row-header">
            <strong>Event:&nbsp;&nbsp;&nbsp;</strong>
          </span>{" "}
          Faro Cafe: A night of techno
        </div>
        <div className="">
          <strong>Where</strong>
        </div>
        <div className="">
          <strong>When</strong>
        </div>
        <div className="">
          <strong>Who</strong>
        </div>
        <div className="">
          <strong>Event social links</strong>
        </div>
        <div className="">
          <strong>Artist social links</strong>
        </div>
        <div className="">
          <strong>Cost</strong>
        </div>
        <div className="">
          <strong>Event Type</strong>
        </div>
        <div className="">
          <strong>Age</strong>
        </div>
        <div className="">
          <strong>Type</strong>
        </div>
        <div className="">
          <strong>Flyer</strong>
        </div>
        <div className="">
          <strong>Email</strong>
        </div>
      </div>
    </div>
  );
}
