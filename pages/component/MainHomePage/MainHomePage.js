import React from "react";
import LandingPageFooter from "../Footer/LandingPageFooter";
import Subscription from "../MainHome/Subscription";
import TopHeader from "../TopHeader/TopHeader";
import TopHeaderBanner from "../TopHeader/TopHeaderBanner";

const MainHomePage = () => {
  return (
    <div>
      <TopHeader></TopHeader>
      <TopHeaderBanner></TopHeaderBanner>

      <Subscription> </Subscription>
      <LandingPageFooter></LandingPageFooter>
    </div>
  );
};

export default MainHomePage;
