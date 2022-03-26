import React from 'react';
import '../assets/about.css'

const About = () => {
    return (
        <>
            
            <div>
        <header>
          <a href="#" className="logo">Logo</a>
          <div className="toggle" />
        </header>
        <div className="slider">
          <input type="radio" name="slider" defaultChecked="checked" />
          <div className="imgBx">
            <img src="img1.jpg" alt="" />
            <div className="content">
              <h2>Slide One</h2>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet corrupti at temporibus saepe blanditiis, animi voluptas quam necessitatibus et laboriosam veritatis eum dolor, vero quasi magnam neque. Dolorum, architecto perspiciatis!</p>
              <a href="#">Read More</a>
            </div>
          </div>
          <input type="radio" name="slider" defaultChecked="checked" />
          <div className="imgBx">
            <img src="img1.jpg" alt="" />
            <div className="content">
              <h2>Slide One</h2>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet corrupti at temporibus saepe blanditiis, animi voluptas quam necessitatibus et laboriosam veritatis eum dolor, vero quasi magnam neque. Dolorum, architecto perspiciatis!</p>
              <a href="#">Read More</a>
            </div>
          </div>
        </div>
        <div className="counter-up">
          <div className="content">
            <div className="box">
              <div className="icon"><i className="fas fa-history" /></div>
              <div className="counter">724</div>
              <div className="text">Working Hours</div>
            </div>
            <div className="box">
              <div className="icon"><i className="fas fa-gift" /></div>
              <div className="counter">508</div>
              <div className="text">Completed Projects</div>
            </div>
            <div className="box">
              <div className="icon"><i className="fas fa-users" /></div>
              <div className="counter">436</div>
              <div className="text">Happy Clients</div>
            </div>
            <div className="box">
              <div className="icon"><i className="fas fa-award" /></div>
              <div className="counter">120</div>
              <div className="text">Awards Received</div>
            </div>
          </div>
        </div>
        <section className="page-section" id="about">
          <div className="container">
            <div className="text-center">
              <h2 className="section-heading text-uppercase">About</h2>
              <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
            </div>
            <ul className="timeline">
              <li>
                <div className="timeline-image"><img className="rounded-circle img-fluid" src="assets/img/about/1.jpg" alt="..." /></div>
                <div className="timeline-panel">
                  <div className="timeline-heading">
                    <h4>2009-2011</h4>
                    <h4 className="subheading">Our Humble Beginnings</h4>
                  </div>
                  <div className="timeline-body"><p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!</p></div>
                </div>
              </li>
              <li className="timeline-inverted">
                <div className="timeline-image"><img className="rounded-circle img-fluid" src="assets/img/about/2.jpg" alt="..." /></div>
                <div className="timeline-panel">
                  <div className="timeline-heading">
                    <h4>March 2011</h4>
                    <h4 className="subheading">An Agency is Born</h4>
                  </div>
                  <div className="timeline-body"><p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!</p></div>
                </div>
              </li>
            </ul>
          </div>
        </section></div>


        </>
    );
};

export default About;
