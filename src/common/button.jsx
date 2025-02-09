import "../App.css";
import React, { useState } from "react";
import "./common.css";

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
      <div className="atv_btn-innerbox">
        <h2>{title}</h2>
      </div>
      <div className="atv_btn-innerbox">
        <h4>{detail}</h4>
      </div>
    </div>
  );
}

export default Button;
