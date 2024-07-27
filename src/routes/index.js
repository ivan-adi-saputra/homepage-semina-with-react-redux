import { HomepageRoute } from "./HomepageRoute";
import { Routes, Route, Navigate } from "react-router-dom";
import { SigninRouter } from "./SigninRoute";

export function RouteApp() {
  return (
    <>
      <Routes>
        <Route path="homepage/*" element={<HomepageRoute />} />
        <Route path="signin/*" element={<SigninRouter />} />
        <Route path="" element={<Navigate to={"homepage"} />} />
      </Routes>
    </>
  );
}
