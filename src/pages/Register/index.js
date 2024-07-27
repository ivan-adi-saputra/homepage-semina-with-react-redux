import React, { useState } from "react";
import Navbar from "../../components/Navbar";
import Company from "../../components/Company";
import FormRegister from "./form";
import { postData, putData } from "../../utils/fetchData";
import { useNavigate } from "react-router-dom";
import { Alert } from "react-bootstrap";

export default function RegisterPage() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    role: "",
    otp: "",
    otp_status: false,
  });

  const [alert, setAlert] = useState({
    type: "",
    message: "",
    status: false,
  });

  if (alert.status) {
    setTimeout(() => {
      setAlert({
        ...alert,
        status: false,
      });
    }, 2000);
  }

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    setLoading(true);
    let res;
    console.log(form);
    if (form.otp_status) {
      res = await putData("activate", form);
    } else {
      res = await postData("auth/signup", form);
    }

    if (res?.data?.data) {
      if (form.otp_status) {
        navigate("/signin");
      } else {
        setForm({
          ...form,
          otp_status: true,
        });
      }

      setLoading(false);
    } else {
      setLoading(false);
      setAlert({
        ...alert,
        status: true,
        message: res.response.data.msg,
        type: "danger",
      });
    }
  };
  return (
    <>
      <header className="bg-navy">
        <Navbar />
      </header>
      <section class="login header bg-navy">
        <div class="container">
          <div class="row row-cols-md-12 row-cols-1 d-flex justify-content-center align-items-center hero">
            <div class="col-md-6">
              <div class="hero-headline text-start">
                Expand Your <br class="d-none d-md-block" />
                Knowledge & Skills
              </div>
              <p class="hero-paragraph text-start">
                Kami menyediakan berbagai acara terbaik untuk membantu{" "}
                <br class="d-none d-lg-block" />
                anda dalam meningkatkan skills di bidang teknologi
              </p>
            </div>
            <div class="col-md-6">
              {alert.status && (
                <Alert variant={alert.type} dismissible>
                  {alert.message}
                </Alert>
              )}
              <FormRegister
                form={form}
                handleChange={handleChange}
                handleSubmit={handleSubmit}
                loading={loading}
              />
            </div>
          </div>
        </div>
        <Company />
      </section>
    </>
  );
}
