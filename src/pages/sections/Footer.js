import React from "react";
import LOGO1 from "../../assets/LOGO-ALB.png";
import { Button } from "../../components/Button";
import { FaFacebook, FaInstagram } from "react-icons/fa";

export const Footer = () => {
  return (

    <section className="footer">
      <div className="footer-box">
        <div className="footer-float">
          <div className="column">
          <h2>Discord</h2>
          <Button
            text="Verifica Discord"
            color="#0088CC"
            link={"/meciuri"}
          ></Button>
        </div>
          <div className="column">
          <h2>Nu rata ultimele noutati din lumea sportului</h2>
          <p>Aboneaza-te si vei primi cele mai fierbinti ponturi</p>
          
          <form className="formFooter">
            <input type={"email"} placeholder="Introduceti adresa de email"></input>
            <input
              type={"submit"}
              value=">"
              style={{ color: "#00c358", fontWeight: "600", fontSize: "18px" }}
            ></input>
          </form>
          </div>
         <div className="column">
         <h2>Telegram</h2>
         <Button
            text="Verifica Telegram"
            color="#7289da"
            link={"/meciuri"}
          ></Button>
         </div>
        </div>
        <div className="footer-details">
          <img className="logo1" src={LOGO1}></img>
          <div>
            <a href="/">Acasa</a>
            <a href="">Despre Noi</a>
            <a href="">Contact</a>
            <a href="">Termeni si conditii</a>
            <a href="">Politica de confidetialitate</a>
          </div>
        </div>
        <div className="footer-down">
          <p>Copyright C BETRIGHT | Creat de Web-Visionary</p>
          <div style={{ fontSize: "34px" }}>
            <p>
              <FaFacebook></FaFacebook>
            </p>
            <p style={{ marginLeft: "1rem" }}>
              <FaInstagram></FaInstagram>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
