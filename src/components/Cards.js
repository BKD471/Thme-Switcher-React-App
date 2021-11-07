import React, { useContext } from "react";
import ThemeContext from "../context/ThemeContext";
import Aux from "../hoc/Aux";
import AppTheme from "../Colors";

const Cards = () => {
  const [theme, setTheme] = useContext(ThemeContext);
  const currentTheme = AppTheme[theme];
  return (
    <div
      style={{
        backgroundColor: `${currentTheme.backgroundColor}`,
        color: `${currentTheme.textColor}`,
        textAlign: "center",
        padding: "1rem",
        height: "100vh",
      }}
    >
      <h1>Theme Toggler</h1>
      <p>I have to be the greatest version of myself</p>
      <button
        style={{
          backgroundColor: "#26ae60",
          padding: "10px 150px",
          color: "#fff",
          border: `${currentTheme.border}`,
          fontSize: "20px",
        }}
        onClick={() => setTheme(theme === "dark" ? "blue" : "dark")}
      >
        Click to Change
      </button>
    </div>
  );
};

export default Cards;
