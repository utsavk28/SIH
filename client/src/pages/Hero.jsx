import React from 'react'

export const Hero = () => {
  return (
  <>
        <section className="hero">
        <div className="container">
          <div className="hero__image" />
          <div className="hero__text container--pall">
            <h1>A Simple Bookmark Manager</h1>
            <p>
              A clean and simple interface to organize your favourite websites. Open a new 
              browser tab and see your sites load instantly. Try it for free.
            </p>
            <a href="#" className="primary-btn btn-blue">Get it on Chrome</a>
            <a href="#" className="primary-btn btn-smoke">Get it on Firefox</a>
          </div>
        </div>
      </section>
  
  
  </>
  )
}
export default Hero;
