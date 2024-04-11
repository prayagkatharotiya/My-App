import React from "react";
import Common from "./Common";
import web from "../src/images/img-1.gif";

const Home = () => {
  return (
    <>
      <Common
        name="Grow your business With"
        imgsrc={web}
        visit="/service"
        btname="Get Started"
      />
    </>
  );
};

export default Home;
