import React from "react";
import { Button } from "antd"; // Importing Button from Ant Design
import { Link } from "react-router-dom"; // Make sure this is imported
import "../CSS/BigButtonsStyles.css"; // Ensure to import a CSS file for styles

export default function BigButtons() {
  return (
    <div className="button-container">
      <Link to="/findevent">
        <Button className="primary-home-btn" type="primary">
          I am looking for an event
        </Button>
      </Link>
      <Link to="/postevent">
        <Button className="primary-home-btn" type="primary">
          I want to post an event
        </Button>
      </Link>
    </div>
  );
}
