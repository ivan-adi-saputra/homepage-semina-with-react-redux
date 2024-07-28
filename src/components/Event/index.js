import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchingEvent } from "../../redux/event/actions";
import { Spinner } from "react-bootstrap";
import moment from "moment";
import { config } from "../../config";

export default function Event() {
  const dispatch = useDispatch();
  const event = useSelector((state) => state.event);
  console.log(event);
  useEffect(() => {
    dispatch(fetchingEvent());
  }, [dispatch]);

  return (
    <>
      <section class="grow-today">
        <div class="container">
          <div class="sub-title mb-1" id="grow-today">
            <span class="text-gradient-pink">Grow Today</span>
          </div>
          <div class="title">Featured Events</div>
          <div class="mt-5 row gap">
            {event.status === "process" ? (
              <div class="col-12 text-center">
                <Spinner animation="grow" variant="dark" />
              </div>
            ) : event.data.length ? (
              event.data.map((data, index) => {
                return (
                  <div class="col-lg-3 col-md-6 col-12" key={index}>
                    <div class="card-grow h-100">
                      <span class="badge-pricing">
                        {`$${data.tickets[0].price}` || "Free"}
                      </span>
                      <img
                        src={`${config.url_image}/${data.image.name}`}
                        alt="semina"
                      />
                      <div class="card-content">
                        <div class="card-title">{data.title}</div>
                        <div class="card-subtitle">{data.category.name}</div>
                        <div class="description">{`${data.venueName}, ${moment(
                          data.date
                        ).format("DD MMMM YYYY")}`}</div>
                        <a href="details.html" class="stretched-link"></a>
                      </div>
                    </div>
                  </div>
                );
              })
            ) : (
              <div class="col-12 text-center">Tidak ada event</div>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
