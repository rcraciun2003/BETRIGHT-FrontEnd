import React from "react";
import LOGO from "../../assets/LOGO.png";
import { FaFacebook, FaInstagram } from "react-icons/fa";
export const Footer = () => {
  return (
    <section className="footer">
      <div className="footer-box">
        <div className="footer-float">
          <h2>Nu rata ultimele noutati din lumea sportului</h2>
          <p>Aboneaza-te si vei primi cele mai fierbinti ponturi</p>
          <form>
            <input type={"email"}></input>
            <input
              type={"submit"}
              value=">"
              style={{ color: "#00c358", fontWeight: "600", fontSize: "18px" }}
            ></input>
          </form>
        </div>
        <div className="footer-details">
          <img src={LOGO}></img>
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
