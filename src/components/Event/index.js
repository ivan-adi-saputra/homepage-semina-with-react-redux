import React from "react";
import Card1 from "../../assets/images/card-1.png";
import Card2 from "../../assets/images/card-2.png";
import Card3 from "../../assets/images/card-3.png";
import Card4 from "../../assets/images/card-4.png";

export default function Event() {
  return (
    <>
      <section class="grow-today">
        <div class="container">
          <div class="sub-title mb-1" id="grow-today">
            <span class="text-gradient-pink">Grow Today</span>
          </div>
          <div class="title">Featured Events</div>
          <div class="mt-5 row gap">
            <div class="col-lg-3 col-md-6 col-12">
              <div class="card-grow h-100">
                <span class="badge-pricing">$229</span>
                <img src={Card1} alt="semina" />
                <div class="card-content">
                  <div class="card-title">
                    Learn Jira for Sprint Design Venture
                  </div>
                  <div class="card-subtitle">Product Design</div>
                  <div class="description">Bandung, 22 Jan 2022</div>
                  <a href="details.html" class="stretched-link"></a>
                </div>
              </div>
            </div>
            <div class="col-lg-3 col-md-6 col-12">
              <div class="card-grow h-100">
                <span class="badge-pricing">FREE</span>
                <img src={Card2} alt="semina" />
                <div class="card-content">
                  <div class="card-title">Team Management for Long Term</div>
                  <div class="card-subtitle">Product Design</div>
                  <div class="description">Jakarta, 11 Aug 2022</div>
                  <a href="details.html" class="stretched-link"></a>
                </div>
              </div>
            </div>
            <div class="col-lg-3 col-md-6 col-12">
              <div class="card-grow h-100">
                <span class="badge-pricing">$80</span>
                <img src={Card3} alt="semina" />
                <div class="card-content">
                  <div class="card-title">
                    Set Marketing Target For SaaS Bii
                  </div>
                  <div class="card-subtitle">Product Design</div>
                  <div class="description">Bandung, 22 Jan 2022</div>
                  <a href="details.html" class="stretched-link"></a>
                </div>
              </div>
            </div>
            <div class="col-lg-3 col-md-6 col-12">
              <div class="card-grow h-100">
                <span class="badge-pricing">$90</span>
                <img src={Card4} alt="semina" />
                <div class="card-content">
                  <div class="card-title">
                    Google Adsense from Zero to Big Bucks
                  </div>
                  <div class="card-subtitle">Product Design</div>
                  <div class="description">Jakarta, 11 Aug 2022</div>
                  <a href="details.html" class="stretched-link"></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
