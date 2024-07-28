import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import { useParams } from "react-router-dom";
import { config } from "../../config";
import { getData } from "../../utils/fetchData";
import moment from "moment";
import LogoMaps from "../../assets/icons/ic-marker.svg";
import LogoTime from "../../assets/icons/ic-time.svg";
import LogoCalender from "../../assets/icons/ic-calendar.svg";
import FormPayment from "./form";

export default function PaymentPage() {
  const { id } = useParams();

  const [form, setForm] = useState({
    date: "",
    tagline: "",
    venueName: "",
    tickets: "",
    image: "",
  });

  const findData = async () => {
    const res = await getData(`events/${id}`);
    if (res?.data?.data) {
      setForm({
        ...form,
        date: res.data.data.date,
        tagline: res.data.data.tagline,
        venueName: res.data.data.venueName,
        tickets: res.data.data.tickets[0],
        image: res.data.data.image.name,
      });
    }
  };

  useEffect(() => {
    findData();
  }, []);

  return (
    <>
      <div className="bg-navy">
        <Navbar />

        <div class="checkout container">
          <div class="text-center checkout-title">Invest In Yourself</div>

          <div class="event-details container d-flex flex-wrap justify-content-lg-center align-items-center gap-5">
            <img
              src={`${config.url_image}/${form.image}`}
              class="event-image"
              alt="semina"
            />
            <div class="d-flex flex-column gap-3">
              <h5>{form.tagline}</h5>

              <div class="d-flex align-items-center gap-3">
                <img src={LogoMaps} alt="" />
                <span>{form.venueName}</span>
              </div>
              <div class="d-flex align-items-center gap-3">
                <img src={LogoTime} alt="" />
                <span>{moment(form.date).format("HH:mm A")}</span>
              </div>
              <div class="d-flex align-items-center gap-3">
                <img src={LogoCalender} alt="" />
                <span>{moment(form.date).format("MM DD YYYY")}</span>
              </div>
            </div>
            <div class="total-price">
              {`$${form?.tickets?.price}` || "Free"}
            </div>
          </div>

          <FormPayment />
        </div>
      </div>
    </>
  );
}
