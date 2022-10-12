import React, { useState } from "react";
import { Button } from "./Button";
import { FaBars } from "react-icons/fa";
import LOGO from "../assets/LOGO.png";
import { Link } from "react-router-dom";
import { Ponturi } from "../pages/Ponturi";
export const Navbar = () => {
  const [menu, setMenu] = useState(false);
  return (
    <>
      <div className="nav">
        <div className="nav-content">
          <div className="logo-div">
            <FaBars
              className="bars"
              onClick={() => {
                setMenu(!menu);
              }}
            ></FaBars>
            <img className="logo" src={LOGO}></img>
          </div>
          <div className="nav-menu">
            <a href="/">Acasa</a>
            <a href="/meciuri">Ponturi</a>
            <a href="/blog">Blog</a>
            <a href="/tipsteri">Tipsteri</a>
            <a href="/contact">Contact</a>
          </div>
          <div className="log-reg">
            <a href="/login">Login</a>
            <Button
              text={"Register"}
              color="#00d047"
              link={"/register"}
            ></Button>
          </div>
        </div>
      </div>
      {menu && (
        <div className="mini-menu">
          <a>Acasa</a>
          <a>Ponturi</a>
          <a>Blog</a>
          <a>Tipsteri</a>
          <a>Contact</a>
          <div className="log-reg-mini">
            <a>Login</a>
            <Button text={"Register"} color="#00d047"></Button>
          </div>
        </div>
      )}
    </>
  );
};
