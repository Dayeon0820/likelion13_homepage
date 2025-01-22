import "../App.css";
import React, { useState } from "react";

function Button({ title, detail, activeButton, setActiveButton }) {
  return (
    <div
      id="atv_button"
      className={
        activeButton === detail ? "atv_button-clicked" : "atv_button-default"
      }
      onClick={() => {
        setActiveButton(detail);
        console.log(activeButton);
      }}
    >
      <h2>{title}</h2>
      <h4>{detail}</h4>
    </div>
  );
}

export default Button;
