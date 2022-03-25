import React from "react";
import Searchbar from "./Searchbar";

export const Hero = ({setData,setisloaded}) => {
  return (
    <>
      <section className="hero" id="home">
        <div className="container">
          <div className="hero__image" />
          <div className="hero__text container--pall">
            <h1>The Third Eye </h1>
            <p>
              A simple and easy way to track Suspected criminals on the move.
              A web based solution to increase security on roads.
            </p>
           

            <Searchbar setData={setData}   setisloaded={setisloaded}/>
          </div>
        </div>
      </section>
    </>
  );
};
export default Hero;
