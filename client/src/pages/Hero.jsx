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
              A simple and easy way to track Suspected criminals on the move.
              A web based solution to increase security on roads.
            </p>
           

            <Searchbar setData={setData} />
          </div>
        </div>
      </section>
    </>
  );
};
export default Hero;
