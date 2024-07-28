import React from "react";
import { Route, Routes } from "react-router-dom";
import PaymentPage from "../pages/Payment";

export default function PaymentRoute() {
  return (
    <Routes>
      <Route path="/:id" element={<PaymentPage />} />
    </Routes>
  );
}
