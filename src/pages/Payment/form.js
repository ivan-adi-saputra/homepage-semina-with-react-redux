import React, { useEffect, useState } from "react";
import Secure from "../../assets/icons/ic-secure.svg";
import MasterCard from "../../assets/icons/ic-mastercard.svg";
import Input from "../../components/Input";
import SButton from "../../components/Button";
import { getData, postData } from "../../utils/fetchData";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";

export default function FormPayment() {
  const { id } = useParams();
  const { token } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    role: "",
    payment: "",
    tickets: [""],
  });

  const findData = async () => {
    const res = await getData(`events/${id}`);
    if (res?.data?.data) {
      const tickets = {
        ticketCategories: {
          type: res.data.data.tickets[0].type,
          price: res.data.data.tickets[0].price,
        },
        sumTicket: 1,
      };
      setForm({
        ...form,
        tickets: [tickets],
      });
    }
  };

  useEffect(() => {
    findData();
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const [payments, setPayments] = useState([]);

  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    setLoading(true);
    const payload = {
      event: id,
      payment: form.payment,

      tickets: form.tickets,
      personalDetail: {
        firstName: form.firstName,
        lastName: form.lastName,
        email: form.email,
        role: form.role,
      },
    };
    console.log(payload);
    const res = await postData("checkout", payload, token);

    if (res?.data?.data) {
      navigate("/homepage");
      setLoading(false);
    } else {
      console.log("error");
      console.log(res);
    }
  };

  const getPayment = async () => {
    const res = await getData("payments");
    if (res?.data?.data) {
      res.data.data.forEach((item) => {
        item.isChecked = false;
      });

      setPayments(res.data.data);
    }
  };

  const handlePayment = (e, i) => {
    const _temp = [...payments];

    _temp[i].isChecked = e.target.checked;

    _temp.forEach((t) => {
      if (t._id !== e.target.value) {
        t.isChecked = false;
      }
    });

    setPayments(_temp);
  };

  useEffect(() => {
    let paymentId = "";

    payments.filter((payment) => {
      if (payment.isChecked) {
        paymentId = payment._id;
      }
    });
    setForm({ ...form, payment: paymentId });
  }, [payments]);

  useEffect(() => {
    getPayment();
  }, []);

  return (
    <form action="" class="container form-semina">
      <div class="personal-details">
        <div class="row row-cols-lg-8 row-cols-md-2 row-cols-1 justify-content-lg-center">
          <div class="form-title col-lg-8">
            <span>01</span>
            <div>Personal Details</div>
          </div>
        </div>
        <div class="row row-cols-lg-8 row-cols-md-2 row-cols-1 justify-content-center">
          <div class="mb-4 col-lg-4">
            <div class="d-flex flex-column align-items-start">
              <Input
                label="First Name"
                name="firstName"
                placeholder={"First name here"}
                value={form.name}
                type={"text"}
                onChange={handleChange}
              />
            </div>
          </div>
          <div class="mb-4 col-lg-4">
            <Input
              label="Last Name"
              name="lastName"
              placeholder={"Last name here"}
              value={form.name}
              type={"text"}
              onChange={handleChange}
            />
          </div>
        </div>
        <div class="row row-cols-lg-8 row-cols-md-2 row-cols-12 justify-content-center">
          <div class="mb-4 col-lg-4">
            <Input
              label="Email"
              name="email"
              placeholder={"Your Email"}
              value={form.name}
              type={"email"}
              onChange={handleChange}
            />
          </div>
          <div class="mb-4 col-lg-4">
            <Input
              label="Role"
              name="role"
              placeholder={"Your Role"}
              value={form.name}
              type={"text"}
              onChange={handleChange}
            />
          </div>
        </div>
      </div>

      <div class="payment-method mt-4">
        <div class="row row-cols-lg-8 row-cols-md-2 row-cols-1 justify-content-lg-center">
          <div class="form-title col-lg-8">
            <span>02</span>
            <div>Payment Method</div>
          </div>
        </div>
        <div class="row row-cols-lg-8 row-cols-md-2 row-cols-1 justify-content-center gy-4 gy-md-0">
          {payments.map((item, key) => (
            <div class="col-lg-4" key={key}>
              <label class="payment-radio h-100 d-flex justify-content-between align-items-center">
                <div class="d-flex align-items-center gap-4">
                  <img src={MasterCard} alt="" />
                  <div>{item.type}</div>
                </div>
                <input
                  type="radio"
                  checked={item.isChecked}
                  name="isChecked"
                  value={item._id}
                  onChange={(e) => handlePayment(e, key)}
                />
                <span class="checkmark"></span>
              </label>
            </div>
          ))}
        </div>
      </div>

      <div class="d-flex flex-column align-items-center footer-payment gap-4">
        <SButton
          children={"Pay Now"}
          className={"btn-green"}
          disabled={loading}
          loading={loading}
          onClick={handleSubmit}
        />
        <div>
          <img src={Secure} alt="" />
          <span>Your payment is secure and encrypted</span>
        </div>
      </div>
    </form>
  );
}
