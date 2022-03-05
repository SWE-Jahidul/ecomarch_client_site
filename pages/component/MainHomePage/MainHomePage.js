import React from "react";
import TopHeader from "../TopHeader/TopHeader";
import TopHeaderBanner from "../TopHeader/TopHeaderBanner";

const MainHomePage = () => {
  return (
    <>
      <section>
        <TopHeader></TopHeader>
      </section>
      <section style={{ marginTop:80}}>
        <TopHeaderBanner></TopHeaderBanner>
      </section>
    </>
  );
};

export default MainHomePage;
