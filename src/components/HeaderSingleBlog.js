import React from "react";
import { Navbar } from "../components/Navbar";

export const HeaderSingleBlog = ({ title, subtitle }) => {
  return (
    <div className="header-single-blog">
      <div className="header-single-blog-text">
        <h1>{title}</h1>
        <p>{subtitle}</p>
      </div>
    </div>
  );
};
