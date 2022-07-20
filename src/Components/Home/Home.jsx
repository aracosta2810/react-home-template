import React from "react";
import ContactUsForm from "./ContactUsForm";
import Hero from "./Hero";
import Cards from "./Cards";
import Features from "./Features";
import TextInformation from "./TextInformation";

const Home = () => {
  return (
    <div>
      <Hero />
      <ContactUsForm />
      <div className="container">
        <TextInformation />
        <Cards />
        <Features />
      </div>
    </div>
  );
};

export default Home;
