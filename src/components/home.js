import React from 'react';
import img1 from "../image/activity-1.jpg"

const HeroSection = () => {
  return (
    <section className="hero">
      <div className="hero-image">
      <img src={img1}></img>
      </div>
      <div className="hero-content">
        <h1>Welcome to Our Travel Website</h1>
        <br></br>
        <p>Discover amazing destinations and book your next trip with us.</p>
        <br></br>
        {<a href="#" className="hero-button">Book Now</a> }
      </div>
    </section>
  );
};

export default HeroSection;
