import React from "react";
import ReactDOM from "react-dom/client";
import "./style.css";
import Navbar from "./Navbar.js";
import App from "./App.js";

function Everything() {
  return (
    <div>
      <Navbar />
      <App />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Everything />);
