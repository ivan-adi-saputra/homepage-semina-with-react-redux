import React from "react";
import Logo from "../../assets/images/logo.svg";

export default function Footer() {
  return (
    <>
      <footer class="footer bg-navy">
        <div class="container">
          <a href="index.html">
            <img src={Logo} alt="semina" />
          </a>
          <div class="mt-3 d-flex flex-row flex-wrap footer-content align-items-baseline">
            <p class="paragraph">
              Semina adalah tempat di mana <br class="d-md-block d-none" /> anda
              dapat mencari event sesuai <br class="d-md-block d-none" /> dengan
              minat & terdekat.
            </p>
            <div class="d-flex flex-column footer-links">
              <div class="title-links mb-3">Features</div>
              <a href="#">Virtual</a>
              <a href="#">Pricing</a>
              <a href="#">Merchant</a>
              <a href="#">Tickets</a>
            </div>
            <div class="d-flex flex-column footer-links">
              <div class="title-links mb-3">Company</div>
              <a href="#">Jobs</a>
              <a href="#">API</a>
              <a href="#">Press</a>
              <a href="#">Sitemap</a>
            </div>
            <div class="d-flex flex-column footer-links">
              <div class="title-links mb-3">Learn</div>
              <a href="#">Guidebook</a>
              <a href="#">Inspiration</a>
              <a href="#">Community</a>
              <a href="#">Tools</a>
            </div>
          </div>
          <div class="d-flex justify-content-center paragraph all-rights">
            All Rights Reserved. Semina Ivan 2024.
          </div>
        </div>
      </footer>
    </>
  );
}
