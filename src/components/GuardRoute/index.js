import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

export default function GuardRoute({ children }) {
  const { token } = useSelector((state) => state.auth);

  if (!token) return <Navigate to={"/signin"} />;

  return children || <Outlet />;
}
