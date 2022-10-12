import React from "react";
import { Navbar } from "../components/Navbar";

export const Login = () => {
  return (
    <>
      <div className="login">
        <Navbar></Navbar>
        <form className="loginform">
          <h2>Login</h2>
          <label>Username:</label>
          <input type={"text"}></input>
          <label>Password:</label>
          <input type={"password"}></input>
          <input
            type={"submit"}
            className="input-button"
            value={"Login"}
          ></input>
        </form>
        </div>
    </>
  );
};
