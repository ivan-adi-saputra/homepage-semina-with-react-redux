import React from "react";
import Image1 from "../../assets/images/1.png";
import Image2 from "../../assets/images/2.png";
import { Image } from "react-bootstrap";

export default function ImageHero() {
  return (
    <>
      <div className="d-flex flex-row flex-nowrap justify-content-center align-items-center gap-5 header-image">
        <Image alt="semina" className="img-1" src={Image1} />
        <Image alt="semina" className="img-2" src={Image2} />
        <Image alt="semina" className="img-1" src={Image1} />
      </div>
    </>
  );
}
