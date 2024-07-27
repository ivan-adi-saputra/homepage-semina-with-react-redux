import Layouts from "../components/Layouts";
import { HomepageRoute } from "./HomepageRoute";
import { Routes, Route, Navigate } from "react-router-dom";

export function RouteApp() {
  return (
    <>
      <Routes>
        {/* <Route element={<Layouts />}> */}
        <Route path="homepage/*" element={<HomepageRoute />} />
        <Route path="" element={<Navigate to={"homepage"} />} />
        {/* </Route> */}
      </Routes>
    </>
  );
}
