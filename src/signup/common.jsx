import "../App.css";
import React, { useState } from "react";
import styles from "./css/signup.module.css";

const Title = ({ title, subtitle }) => {
  return (
    <>
      <div className={styles.header}>
        <h1 className={styles.header_title}>{title}</h1>
        <p>{subtitle}</p>
      </div>
    </>
  );
};

export default Title;
