import React from "react";
import HeroImage from "./image";

export default function Hero() {
  return (
    <>
      <div class="hero">
        <div class="hero-headline">
          Expand Your <span class="text-gradient-blue">Knowledge</span>{" "}
          <br class="d-none d-lg-block" />
          by <span class="text-gradient-pink">Joining</span> Our Greatest Events
        </div>
        <p class="hero-paragraph">
          Kami menyediakan berbagai acara terbaik untuk membantu{" "}
          <br class="d-none d-lg-block" />
          anda dalam meningkatkan skills di bidang teknologi
        </p>
        <a href="#grow-today" class="btn-green">
          Browse Now
        </a>
      </div>

      <HeroImage />
    </>
  );
}
