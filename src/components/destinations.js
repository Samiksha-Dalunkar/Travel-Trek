import React from 'react';

const DestinationsSection = () => {
  return (
    <section id="destinations" className="destinations">
      <h2>Popular Destinations</h2>
      <div className="destination-grid">
        <div className="destination-item">
       
          <img src="https://images.unsplash.com/photo-1570698473651-b2de99bae12f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGRlc3RpbmF0aW9ufGVufDB8fDB8fHww"/>

          <center><h3>New York City</h3></center>
          <br></br>
          <p>
            Visit the city that never sleeps and discover its iconic
            landmarks, world-class museums, and diverse neighborhoods.
          </p>
        </div>
        <div className="destination-item">
         
          <img src="https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
          <center><h3>Paris</h3></center>
          <br></br>
          <p>
            Experience the romance and culture of the City of Lights, from the
            Eiffel Tower to the Louvre Museum.
          </p>
        </div>
        <div className="destination-item">
         
          <img src="https://images.unsplash.com/photo-1517732306149-e8f829eb588a?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
                      <center><h3>Tokyo</h3></center>
<br></br>
          <p>
            Explore the vibrant city of Tokyo and immerse yourself in its
            unique blend of ancient traditions and modern technology.
          </p>
        </div>
      </div>
    </section>
  );
};

export default DestinationsSection;
