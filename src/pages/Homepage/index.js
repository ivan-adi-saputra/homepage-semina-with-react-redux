import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Hero from "../../components/Hero";
import Company from "../../components/Company";
import Story from "../../components/Story";
import Event from "../../components/Event";

export default function Homepage() {
  return (
    <>
      <header class="header bg-navy">
        <Navbar />
        <Hero />
      </header>
      <Company />
      <Event />
      <Story />
      <Footer />
    </>
  );
}
