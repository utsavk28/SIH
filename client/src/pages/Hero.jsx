import React from "react";
import Searchbar from "./Searchbar";

export const Hero = ({setData}) => {
  return (
    <>
      <section className="hero">
        <div className="container">
          <div className="hero__image" />
          <div className="hero__text container--pall">
            <h1>Vehicle Tracking </h1>
            <p>
              A clean and simple interface to organize your favourite websites.
              Open a new browser tab and see your sites load instantly. Try it
              for free.
            </p>
           

            <Searchbar setData={setData} />
          </div>
        </div>
      </section>
    </>
  );
};
export default Hero;
