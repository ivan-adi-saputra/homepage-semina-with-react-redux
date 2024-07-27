import React from "react";
import { Route, Routes } from "react-router-dom";
import Homepage from "../pages/Homepage";

export function HomepageRoute() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />} />
      </Routes>
    </>
  );
}
