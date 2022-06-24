import React from "react";
import ReactDOM from "react-dom/client";
import "./style.css";
import Navbar from "./Navbar.js";
import App from "./App.js";
import Footer from "./Footer.js";

function Everything() {
  return (
    <div>
      <Navbar />
      <App />
      <Footer />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Everything />);
