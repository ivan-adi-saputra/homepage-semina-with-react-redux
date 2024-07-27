import { Routes, Route } from "react-router-dom";
import RegisterPage from "../pages/Register";

export function RegisterRoute() {
  return (
    <Routes>
      <Route path="/" element={<RegisterPage />} />
    </Routes>
  );
}
