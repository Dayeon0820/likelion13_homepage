import "../App.css";
import React, { useState } from "react";
import "./common.css";

function Button({ title, detail, activeButton, setActiveButton }) {
  return (
    <button
      id="atv_button"
      className={
        activeButton === detail ? "atv_button-clicked" : "atv_button-default"
      }
      onClick={() => {
        setActiveButton(detail);
        console.log(activeButton);
      }}
    >
      <div className="atv_btn-innerbox">
        <h2>{title}</h2>
        <h4>{detail}</h4>
      </div>
    </button>
  );
}

export default Button;
