import React from "react";
import { Outlet } from "react-router-dom";
import Snowfall from "react-snowfall";
import Headers from "../UI/Headers";
import Footers from "../UI/Footers";

const AppLayout = () => {
  return (
    <div className="min-h-screen">
      {/* Festive snowfall effect ❄️ */}
      <Snowfall
        color="white"
        snowflakeCount={150}
        style={{
          position: "fixed",
          width: "100vw",
          height: "100vh",
          zIndex: 9999,
          pointerEvents: "none", // Allow clicking through the snowflakes
        }}
      />
      <Headers />
      <Outlet />
      <Footers />
    </div>
  );
};

export default AppLayout;
