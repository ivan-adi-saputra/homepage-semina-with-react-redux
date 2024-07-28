import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

export default function GuardOnlyRoute({ children }) {
  const { token } = useSelector((state) => state.auth);

  if (token) return <Navigate to={"/homepage"} />;

  return children || <Outlet />;
}
