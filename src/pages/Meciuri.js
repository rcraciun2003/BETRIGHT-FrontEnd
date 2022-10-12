import React from "react";
import { FiltruMeci } from "../components/FiltruMeci";
import { Navbar } from "../components/Navbar";
import { Whyus } from "./sections/Whyus";
import { Meci } from "../components/Meci";
import { HeaderAll } from "../components/HeaderAll";
import { Footer } from "./sections/Footer";
import { StatusMeciuri } from "../components/StatusMeciuri";

export const Meciuri = ({ meci, timp, meciuri, title, subtitle }) => {
  return (
    <>
      <Navbar></Navbar>
      <HeaderAll title="Ponturi active" subtitle="ponturi active"></HeaderAll>
      <div className="ponturi">
        <div className="ponturi-p">
          <div className="ponturi-filter">
            <div className="filter-status">
              <StatusMeciuri title={"66"} subtitle={"128"}></StatusMeciuri>
              <FiltruMeci></FiltruMeci>
            </div>
            {/* {ponturi.map((pont) => (
            <Pont
            name={pont.name}
            accuracy={pont.accuracy}
            ponturi={pont.ponturi}
            meci={pont.meci}
            date={pont.date}
            comment={pont.comment}
            pronostic={pont.pronostic}
            postDate={pont.postDate}
            cota={pont.cota}
            ></Pont>
          ))} */}
            <div className="ponturi-active">
              <Meci
                meci={"Man. City vs Chelsea"}
                data="Azi 19:00"
                ponturi={"36"}
              ></Meci>{" "}
              <Meci
                meci={"Man. City vs Chelsea"}
                data="Azi 19:00"
                ponturi={"36"}
              ></Meci>{" "}
              <Meci
                meci={"Man. City vs Chelsea"}
                data="Azi 19:00"
                ponturi={"36"}
              ></Meci>{" "}
              <Meci
                meci={"Man. City vs Chelsea"}
                data="Azi 19:00"
                ponturi={"36"}
              ></Meci>{" "}
              <Meci
                meci={"Man. City vs Chelsea"}
                data="Azi 19:00"
                ponturi={"36"}
              ></Meci>{" "}
              <Meci
                meci={"Man. City vs Chelsea"}
                data="Azi 19:00"
                ponturi={"36"}
              ></Meci>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};
