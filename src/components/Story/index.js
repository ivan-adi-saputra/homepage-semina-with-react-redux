import React from "react";
import Story from "../../assets/images/story.png";
import { Link } from "react-router-dom";

export default function index() {
  return (
    <>
      <section class="stories">
        <div class="d-flex flex-row justify-content-center align-items-center container">
          <img src={Story} alt="semina" class="d-none d-lg-block" width="515" />
          <div class="d-flex flex-column">
            <div>
              <div class="sub-title">
                <span class="text-gradient-pink">Story</span>
              </div>
              <div class="title">
                One Great Event. <br class="d-none d-lg-block" />
                For The Better World.
              </div>
            </div>
            <p class="paragraph">
              Baca kisah bagaimana Shayna berhasil membangun{" "}
              <br class="d-none d-lg-block" />
              sebuah Startup yang membantu warga untuk{" "}
              <br class="d-none d-lg-block" />
              mendapatkan bantuan selama pandemic.
            </p>
            <Link className="btn-navy">Read</Link>
          </div>
        </div>
      </section>

      <section class="statistics container">
        <div class="d-flex flex-row flex-wrap justify-content-center align-items-center gap-5">
          <div class="d-flex flex-column align-items-center gap-1">
            <div class="title">190K+</div>
            <p>Events Created</p>
          </div>
          <div class="vr"></div>
          <div class="d-flex flex-column align-items-center gap-1">
            <div class="title">3M</div>
            <p>People Joined</p>
          </div>
          <div class="vr d-none d-md-block"></div>
          <div class="d-flex flex-column align-items-center gap-1">
            <div class="title">5K+</div>
            <p>Success Startup</p>
          </div>
          <div class="vr"></div>
          <div class="d-flex flex-column align-items-center gap-1">
            <div class="title">113K+</div>
            <p>Top Speakers</p>
          </div>
        </div>
      </section>
    </>
  );
}
