import React, { useState } from "react";
import { Button } from "./Button";
import { FaBars } from "react-icons/fa";
import LOGO from "../assets/LOGO.jpg";
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
          <a href="/"><img className="logo" src={LOGO}></img></a>
          </div>
          <div className="nav-menu">
            <a href="/">Acasa</a>
            <a href="/ponturi">Ponturi</a>
            <a href="/meciuri">Meciuri</a>
            <a href="/bloguri">Blog</a>
            <a href="/tipsteri">Tipsteri</a>
            <a href="/contact">Contact</a>
          </div>
          <div className="log-reg">
          <Button
            text="Intra in cont"
            color="#00b300"
            link={"/login"}
          ></Button>
          </div>
        </div>
      </div>
      {menu && (
        <div className="mini-menu">
          <a href="/">Acasa</a>
            <a href="/ponturi">Ponturi</a>
            <a href="/meciuri">Meciuri</a>
            <a href="/bloguri">Blog</a>
            <a href="/tipsteri">Tipsteri</a>
            <a href="/contact">Contact</a>
          <div className="log-reg-mini">
          <Button
            text="Intra in cont"
            color="#00b300"
            link={"/login"}
          ></Button>
          </div>
        </div>
      )}
    </>
  );
};
