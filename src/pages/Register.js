import React from "react";
import { Navbar } from "../components/Navbar";

export const Register = () => {
  return (
    <>
      <div className="login">
        <Navbar></Navbar>
        <form className="loginform">
          <h2>Register</h2>
          <label>Username:</label>
          <input type={"text"}></input>
          <label>Email:</label>
          <input type={"email"}></input>
          <label>Password:</label>
          <input type={"password"}></input>
          <label>Repeat password:</label>
          <input type={"password"}></input>
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
