import React from "react";
import ReactDOM from "react-dom/client";
import Navbar from "./components/navbar";
import "bootstrap/dist/css/bootstrap.min.css";

const element = <h1>Hallo Welt</h1>;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    <Navbar />
    {element}
  </div>
);

