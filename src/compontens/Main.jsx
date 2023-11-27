import React, { useContext } from "react";
import { Navvbar } from "./Navvbar";
import { Outlet } from "react-router-dom";
import { Footer } from "./Footer";
import { AuthoContext } from "../context/AuthoProvider";
import { Looding } from "./Looding";

export const Main = () => {
  const { looding } = useContext(AuthoContext);
  return (
    <>
      <div className="bg-slate-50">
        {looding ? (
          <Looding />
        ) : (
          <div>
            <Navvbar />
            <Outlet />
            <Footer />
          </div>
        )}
      </div>
    </>
  );
};
