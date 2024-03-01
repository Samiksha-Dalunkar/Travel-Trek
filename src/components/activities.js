import React from 'react';

const ActivitiesSection = () => {
  return (
    <section id="activites" className="destinations">
      <h2>Featured Activities</h2>
      <div className="destination-grid">
        <div className="destination-item">
       
          <img src="https://images.unsplash.com/photo-1486739985386-d4fae04ca6f7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Uml0eiUyMENhcmx0b24lMjBhY3Rpdml0eXxlbnwwfHwwfHx8MA%3D%3D"/>
          <h3>The Ritz Carlton</h3>
          <p>
            Experience luxury accommodations and impeccable service at The Ritz
            Carlton, located in the heart of the city.
          </p>
        </div>
        <div className="destination-item">
         
          <img src="https://images.unsplash.com/photo-1540132586218-183f59221b4f?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
          <h3>The Four Seasons</h3>
          <p>
            Relax in style at The Four Seasons, featuring breathtaking views,
            an award-winning spa, and gourmet dining options.
          </p>
        </div>
        <div className="destination-item">
         
          <img src="https://images.unsplash.com/photo-1480480565647-1c4385c7c0bf?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
          <h3>The Waldorf Astoria</h3>
          <p>
            Indulge in luxury at The Waldorf Astoria, a historic landmark hotel
            renowned for its elegance and sophistication.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ActivitiesSection;
