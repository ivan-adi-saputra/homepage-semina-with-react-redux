import React from "react";
import { Routes, Route } from "react-router-dom";
import SigninPage from "../pages/Signin";

export function SigninRouter() {
  return (
    <Routes>
      <Route path="/" element={<SigninPage />} />
    </Routes>
  );
}
