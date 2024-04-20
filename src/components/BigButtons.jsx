import React from "react";
import { Button } from "antd"; // Importing Button from Ant Design
import "../CSS/BigButtonsStyles.css"; // Ensure to import a CSS file for styles

export default function BigButtons() {
  return (
    <div className="button-container">
      <Button className="primary-home-btn" type="primary">
        I am looking for an event
      </Button>
      <Button className="primary-home-btn" type="primary">
        I want to post an event
      </Button>
    </div>
  );
}
