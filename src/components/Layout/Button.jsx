import React from "react";

const Button = ({ border, color, padding, onClickFunction, children }) => {
  const buttonStyle = {
    border: border || "1px solid #ccc",
    backgroundColor: color || "#fff",
    padding: padding || "10px 20px",
    cursor: "pointer",
  };

  return (
    <button style={buttonStyle} onClick={onClickFunction}>
      {children}
    </button>
  );
};

export default Button;
