import { Routes, Route } from "react-router-dom";
import EventDetailPage from "../pages/EventDetail";

export function EventDetailRoute() {
  return (
    <Routes>
      <Route path="/:id" element={<EventDetailPage />} />
    </Routes>
  );
}
