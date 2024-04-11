import React from "react";
import Common from "./Common";
import web from "../src/images/img-2.gif";

const About = () => {
  return (
    <>
      <Common
        name="Walcome to About page"
        imgsrc={web}
        visit="/contact"
        btname="Contact Now"
      />
    </>
  );
};

export default About;
