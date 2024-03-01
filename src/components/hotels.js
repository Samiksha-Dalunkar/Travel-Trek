import React from 'react';

const HotelsSection = () => {
  return (
    <section id="hotels" className="destinations">
      <h2>Featured Hotels</h2>
      <div className="destination-grid">
        <div className="destination-item">
         
          <img src="https://images.unsplash.com/photo-1455587734955-081b22074882?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aG90ZWwlMjBpbWd8ZW58MHx8MHx8fDA%3D"/>
          <h3>The Ritz Carlton</h3>
          <p>
            Experience luxury accommodations and impeccable service at The
            Ritz Carlton, located in the heart of the city.
          </p>
        </div>
        <div className="destination-item">
         
          <img src="https://images.unsplash.com/photo-1551632436-cbf8dd35adfa?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHdpbmUlMjBnbGFzcyUyMGhvdGVsfGVufDB8fDB8fHww"/>
          <h3>The Four Seasons</h3>
          <p>
            Relax in style at The Four Seasons, featuring breathtaking views,
            an award-winning spa, and gourmet dining options.
          </p>
        </div>
        <div className="destination-item">
         
          <img src="https://images.unsplash.com/photo-1585694854987-19b609e7721b?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
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

export default HotelsSection;
