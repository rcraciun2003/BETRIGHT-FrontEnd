import React from "react";
import { Navbar } from "../components/Navbar";

export const Login = () => {
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
        <input type="password" id="input" required />
        <label>Parola</label>
    </div>
          <input
            type={"submit"}
            className="input-button1"
            value={"Login"}
          ></input>
        </form>
        </div>
    </>
  );
};
