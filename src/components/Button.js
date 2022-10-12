import React from "react";

export const Button = ({ text, color, link }) => {
  return (
    <span
      className="btn"
      style={{
        background: `${color}`,
        color: "white",
        textDecoration: "none",
      }}
    >
      <a
        style={{
          color: "white",
          textDecoration: "none",
        }}
        href={link}
      >
        {text}
      </a>
    </span>
  );
};
