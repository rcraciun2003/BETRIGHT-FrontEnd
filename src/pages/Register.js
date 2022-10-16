import React from "react";
import { Navbar } from "../components/Navbar";

export const Register = () => {
  return (
    <>
      <div className="login">
        <Navbar></Navbar>
        <form className="loginform">
          <h2>Conecteaza-te</h2>
         <div class="input-form">
        <input type="text" id="input" required />
        <label>Name</label>
        </div>
         <div class="input-form">
        <input type="email" id="input" required />
        <label>Email</label>
        </div>
        <div class="input-form">
        <input type="password" id="input" required />
        <label>Parola</label>
        </div>
        <div class="input-form">
        <input type="password" id="input" required />
        <label>Repetati parola</label>
        </div>
          <input
            type={"submit"}
            className="input-button"
            value={"Register"}
          ></input>
        </form>
      </div>
    </>
  );
};
