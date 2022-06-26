import React from "react";
import ReactDOM from "react-dom/client";
import "./style.css";
import Navbar from "./components/Navbar.js";
import Main from "./components/Main.js";

function Everything() {
  return (
    <div>
      <Navbar />
      <Main />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Everything />);
