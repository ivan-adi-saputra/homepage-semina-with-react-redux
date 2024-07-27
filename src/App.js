import React, { useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import { RouteApp } from "./routes";
import { listen } from "./redux/listener";

function App() {
  useEffect(() => {
    listen();
  }, []);

  return (
    <>
      <BrowserRouter>
        <RouteApp />
      </BrowserRouter>
    </>
  );
}

export default App;
