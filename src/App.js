import React from "react";
import { BrowserRouter } from "react-router-dom";
import { RouteApp } from "./routes";

function App() {
  return (
    <>
      <BrowserRouter>
        <RouteApp />;
      </BrowserRouter>
    </>
  );
}

export default App;
