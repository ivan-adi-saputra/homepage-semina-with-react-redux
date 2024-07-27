import React from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import { Outlet } from "react-router-dom";

export default function Layouts() {
  return (
    <>
      <header class="header bg-navy">
        <Navbar />
      </header>
      <Outlet />
      <Footer />
    </>
  );
}
