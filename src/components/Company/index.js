import React from "react";
import Apple from "../../assets/images/apple-111.svg";
import Adobe from "../../assets/images/Adobe.svg";
import Slack from "../../assets/images/slack-21.svg";
import Spotify from "../../assets/images/spotify-11.svg";
import Google from "../../assets/images/google-2015.svg";

export default function Company() {
  return (
    <>
      <section class="brand-partner text-center">
        <p>Events held by top & biggest global companies</p>
        <div class="d-flex flex-row flex-wrap justify-content-center align-items-center">
          <img src={Apple} alt="semina" />
          <img src={Adobe} alt="semina" />
          <img src={Slack} alt="semina" />
          <img src={Spotify} alt="semina" />
          <img src={Google} alt="semina" />
        </div>
      </section>
    </>
  );
}
