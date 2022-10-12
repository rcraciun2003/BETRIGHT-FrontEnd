import React from "react";
import { Navbar } from "../components/Navbar";
import { HeaderContact } from "../components/HeaderContact";
import { Footer } from "./sections/Footer";
import { ContactForm } from "../components/ContactForm";

export const Contact = () =>{
  return (
      <>
      <Navbar></Navbar>
      <HeaderContact title="Contact" subtitle="Haideti sa tinem legatura!"></HeaderContact>
      <ContactForm></ContactForm>
      <Footer></Footer>
      </>
  );
};
