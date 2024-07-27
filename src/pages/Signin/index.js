import React, { useState } from "react";
import Navbar from "../../components/Navbar";
import { Container, Alert } from "react-bootstrap";
import FormSignin from "./form";
import { postData } from "../../utils/fetchData";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { userLogin } from "../../redux/auth/actions";

export default function SigninPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [form, setform] = useState({
    email: "",
    password: "",
  });

  const [alert, setAlert] = useState({
    status: false,
    message: "",
    variant: "",
  });

  const [loading, setLoading] = useState(false);

  function handleInput(e) {
    setform({ ...form, [e.target.name]: e.target.value });
  }

  const handleSubmit = async () => {
    setLoading(true);
    const res = await postData("auth/signin", form);
    if (res?.data?.data) {
      navigate("/");
      dispatch(userLogin(res.data.data.token));
      setLoading(false);
    } else {
      setLoading(false);
      setAlert({
        ...alert,
        status: true,
        message: res.response.data.msg,
        variant: "danger",
      });
    }
  };
  return (
    <>
      <header class="bg-navy">
        <Navbar />
        <section class="login header bg-navy">
          <Container>
            <div class="d-flex flex-column align-items-center hero gap-5">
              <div>
                <div class="hero-headline text-start">Sign In</div>
              </div>
              {alert.status && (
                <Alert variant={alert.variant} dismissible>
                  {alert.message}
                </Alert>
              )}

              <FormSignin
                form={form}
                handleInput={handleInput}
                handleSubmit={handleSubmit}
                loading={loading}
              />
            </div>
          </Container>
        </section>
      </header>
    </>
  );
}
