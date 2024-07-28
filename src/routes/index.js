import { HomepageRoute } from "./HomepageRoute";
import { Routes, Route, Navigate } from "react-router-dom";
import { SigninRouter } from "./SigninRoute";
import { RegisterRoute } from "./RegisterRoute";
import { EventDetailRoute } from "./EventDetailRoute";
import GuardOnlyRoute from "../components/GuardOnlyRoute";
import GuardRoute from "../components/GuardRoute";

export function RouteApp() {
  return (
    <>
      <Routes>
        <Route path="homepage/*" element={<HomepageRoute />} />
        <Route path="event-detail/*" element={<EventDetailRoute />} />
        <Route path="/" element={<GuardOnlyRoute />}>
          <Route path="signin/*" element={<SigninRouter />} />
          <Route path="signup/*" element={<RegisterRoute />} />
        </Route>

        <Route path="" element={<Navigate to={"homepage"} />} />
      </Routes>
    </>
  );
}
