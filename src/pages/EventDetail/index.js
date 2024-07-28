import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../../components/Navbar";
import { config } from "../../config";
import Logo from "../../assets/icons/ic-check.svg";
import Maps from "../../assets/images/maps.png";
import LogoMaps from "../../assets/icons/ic-marker.svg";
import LogoTime from "../../assets/icons/ic-time.svg";
import LogoCalender from "../../assets/icons/ic-calendar.svg";
import { getData } from "../../utils/fetchData";
import moment from "moment";
import Event from "../../components/Event";
import Story from "../../components/Story";
import Footer from "../../components/Footer";

export default function EventDetailPage() {
  const { id } = useParams();

  const [form, setForm] = useState({
    title: "",
    date: "",
    about: "",
    keypoint: [""],
    tagline: "",
    talent: "",
    venueName: "",
    tickets: "",
    image: "",
    category: "",
  });

  const findData = async () => {
    const res = await getData(`events/${id}`);
    console.log("res.data.data");
    console.log(res.data.data);
    if (res?.data?.data) {
      setForm({
        ...form,
        title: res.data.data.title,
        date: res.data.data.date,
        about: res.data.data.about,
        talent: res.data.data.talent,
        tagline: res.data.data.tagline,
        keypoint: res.data.data.keyPoint,
        venueName: res.data.data.venueName,
        tickets: res.data.data.tickets,
        image: res.data.data.image.name,
        category: res.data.data.category.name,
      });
    }

    console.log("form");
    console.log(form);
  };

  useEffect(() => {
    findData();
  }, []);

  return (
    <>
      <section className="bg-navy">
        <Navbar />
      </section>
      <div class="preview-image bg-navy text-center">
        <img
          src={`${config.url_image}/${form.image}`}
          class="img-content"
          alt="semina"
        />
      </div>
      <div class="details-content container">
        <div class="d-flex flex-wrap justify-content-lg-center gap">
          <div class="d-flex flex-column description">
            <div class="headline">{form.tagline}</div>
            <div class="event-details">
              <h6>Event Details</h6>
              <p class="details-paragraph">{form.about}</p>
            </div>
            <div class="keypoints">
              {form.keypoint.map((item, index) => (
                <div class="d-flex align-items-start gap-3" key={index}>
                  <img src={Logo} />
                  <span>{item}</span>
                </div>
              ))}
            </div>
            <div class="map-location">
              <h6>Event Location</h6>
              <div class="map-placeholder">
                <div class="maps">
                  <img src={Maps} />
                  <div
                    class="absolute d-flex justify-content-center align-items-center"
                    id="hoverMe"
                  >
                    <a href="#" class="btn-navy" id="btn-maps">
                      View in Google Maps
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="d-flex flex-column card-event">
            <h6>Your Speaker</h6>
            <div class="d-flex align-items-center gap-3 mt-3">
              <img
                src={`${config.url_image}/${form?.talent?.image?.name}`}
                width={60}
              />
              <div>
                <div class="speaker-name">{form.talent.name}</div>
                <span class="occupation">{form.talent.role}</span>
              </div>
            </div>
            <hr />
            <h6>Get Ticket</h6>
            <div class="price my-3">
              {`$${form?.tickets[0]?.price}` || "Free"}
              <span>/person</span>
            </div>
            <div class="d-flex gap-3 align-items-center card-details">
              <img src={LogoMaps} /> {form.venueName}
            </div>
            <div class="d-flex gap-3 align-items-center card-details">
              <img src={LogoTime} /> {moment(form.date).format("HH:mm")}
            </div>
            <div class="d-flex gap-3 align-items-center card-details">
              <img src={LogoCalender} />{" "}
              {moment(form.date).format("DD MMMM YYYY")}
            </div>
            <a href="checkout.html" class="btn-green">
              Join Now
            </a>
          </div>
        </div>
      </div>
      <Event />
      <Story />
      <Footer />
    </>
  );
}
