import React from "react";
import Logo from "../../assets/images/logo.svg";
import { Link, useNavigate } from "react-router-dom";
import SButton from "../Button";
import { useDispatch, useSelector } from "react-redux";
import { userLogout } from "../../redux/auth/actions";

export default function Navbar() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { token } = useSelector((state) => state.auth);

  const handleLogout = () => {
    dispatch(userLogout());
    navigate("/signin");
  };
  return (
    <>
      <nav class="container navbar navbar-expand-lg navbar-dark">
        <div class="container-fluid">
          <a class="navbar-brand" href="index.html">
            <img src={Logo} alt="semina" />
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav mx-auto my-3 my-lg-0">
              <Link className="nav-link active" to={"/"}>
                Home
              </Link>
              <Link className="nav-link " to={"/about"}>
                Browse
              </Link>
              <Link className="nav-link " to={"/stories"}>
                Stories
              </Link>
              <Link className="nav-link " to={"/about"}>
                About
              </Link>
            </div>
            <div class="d-grid">
              {token ? (
                <SButton
                  children="Logout"
                  onClick={handleLogout}
                  className="btn-navy"
                />
              ) : (
                <Link to={"/signin"} className="btn-navy">
                  Signin
                </Link>
              )}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
