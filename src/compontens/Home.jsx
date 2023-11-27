import React from "react";
import { Banner } from "./Banner";
import { Catogery } from "./Catogery";
import { SpecialDesigen } from "./SpecialDesigen";
import { Test } from "./Test";
import { OurService } from "./OurService";

export const Home = () => {
  return (
    <>
      <div>
        <Banner />
        <Catogery />
        <SpecialDesigen />
        <Test />
        <OurService />
      </div>
    </>
  );
};
