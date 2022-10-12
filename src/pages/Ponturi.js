import React from "react";
import { FiltruPont } from "../components/FiltruPont";
import { Navbar } from "../components/Navbar";
import { Whyus } from "./sections/Whyus";
import { Pont } from "../components/Pont";
import { HeaderAll } from "../components/HeaderAll";
import { Footer } from "./sections/Footer";

export const Ponturi = ({ meci, timp, ponturi }) => {
  return (
    <>
      <Navbar></Navbar>
      <HeaderAll title="Ponturi active" subtitle="ponturi active"></HeaderAll>
      <div className="ponturi">
        <div className="meci-status">
          <h1>{meci} Barcelona vs Real Madrid</h1>
          <p>Timp ramas pana la incepere:</p>
          <p>{timp} 1h 20min</p>
        </div>
        <div className="ponturi-p">
          <div className="ponturi-filter">
            <div className="filter-status">
              <FiltruPont></FiltruPont>
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
              <Pont
                name={"Gabriel Vlad"}
                accuracy="88"
                ponturi={"257"}
                meci="FC Barcelona vs Real Madrid"
                date="Azi 21:00"
                comment={"Am impresia ca Barca o sa joace mai bine acum."}
                pronostic="GG si 2.5"
                postDate={"20.02.2020"}
                cota="4.5"
              ></Pont>
              <Pont
                name={"Gabriel Vlad"}
                accuracy="88"
                ponturi={"257"}
                meci="FC Barcelona vs Real Madrid"
                date="Azi 21:00"
                comment={"Am impresia ca Barca o sa joace mai bine acum."}
                pronostic="GG si 2.5"
                postDate={"20.02.2020"}
                cota="4.5"
              ></Pont>
              <Pont
                name={"Gabriel Vlad"}
                accuracy="88"
                ponturi={"257"}
                meci="FC Barcelona vs Real Madrid"
                date="Azi 21:00"
                comment={"Am impresia ca Barca o sa joace mai bine acum."}
                pronostic="GG si 2.5"
                postDate={"20.02.2020"}
                cota="4.5"
              ></Pont>
              <Pont
                name={"Gabriel Vlad"}
                accuracy="88"
                ponturi={"257"}
                meci="FC Barcelona vs Real Madrid"
                date="Azi 21:00"
                comment={"Am impresia ca Barca o sa joace mai bine acum."}
                pronostic="GG si 2.5"
                postDate={"20.02.2020"}
                cota="4.5"
              ></Pont>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};
