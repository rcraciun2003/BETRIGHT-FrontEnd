import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Homepage } from "./pages/Homepage";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";
import { Meciuri } from "./pages/Meciuri";
import { Ponturi } from "./pages/Ponturi";
import { Tipsteri } from "./pages/Tipsteri";
import { Bloguri } from "./pages/Bloguri";
import { Profil } from "./pages/Profil";
import { Contact } from "./pages/Contact";
import { SinglePost } from './pages/SinglePost';
import { WriteBlog } from './pages/WriteBlog';
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="homepage" element={<Homepage />} />
        <Route path="meciuri" element={<Meciuri />} />
        <Route path="profil" element={<Profil />} />
        <Route path="ponturi" element={<Ponturi />} />
        <Route path="tipsteri" element={<Tipsteri />} />
        <Route path="bloguri" element={<Bloguri />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="contact" element={<Contact />} />
        <Route path="single-post" element={<SinglePost />} />
        <Route path="write-blog" element={<WriteBlog />} />
        <Route
          path="*"
          element={
            <main style={{ padding: "1rem" }}>
              <p>There's nothing here!</p>
            </main>
          }
        />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
