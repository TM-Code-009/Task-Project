import React from "react";
import LandingPageHeader from "./LandingPageHeader";
import { Poppins } from "next/font/google";
import { NextFont } from "next/dist/compiled/@next/font";
import ScrollScreen from "./ScrollScreen";
import MainDesign from "./MainDesign";

const poppins: NextFont = Poppins({
  weight: "300",
  style: "normal",
  subsets: ["latin"],
});

const LandingPage = () => {
  return (
    <div className={poppins.className}>
      <div>
        <LandingPageHeader />
        <div className="mt-20" />

        <div>
          <MainDesign />
        </div>

        <ScrollScreen />
      </div>
    </div>
  );
};

export default LandingPage;