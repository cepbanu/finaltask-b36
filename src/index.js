import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Details from "./pages/Details";
import Mylistfilm from "./pages/MyListFilm";
import Profile from "./pages/Profile";
import Home from "./pages/Home";
import Listtransaction from "./pages/ListTransaction";
import Addfilm from "./pages/AddFilm";
import Login from "./components/Login";
import Register from "./components/Register";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="detail/:id" element={<Details />} />
        <Route path="profile" element={<Profile />} />
        <Route path="my-listfilm" element={<Mylistfilm />} />
        <Route path="listtransaction" element={<Listtransaction />} />
        <Route path="addfilm" element={<Addfilm />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
