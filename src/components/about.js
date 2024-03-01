import React from 'react';

const AboutSection = () => {
  return (
    <section id="about" className="about">
      <h3>About Us</h3>
      <p>
        Our company is dedicated to providing the best travel experiences to
        our customers. We specialize in creating custom itineraries that cater
        to each individual's interests and preferences.
      </p>
      <div className="team-members">
        <div className="team-member">
         
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8Rv8FNDFe9jF2UAzFqgMio3-01kv0z8x_gQ&usqp=CAU"/>
          <h4>John Smith</h4>
          <p>Founder & CEO</p>
        </div>
        <div className="team-member">
          
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpLMNKbq31UERVTnMMw8P7nNWBRUeqgjmj6w&usqp=CAU"/>
          <h4>Jane Doe</h4>
          <p>Head of Operations</p>
        </div>
        <div className="team-member">
         
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPwazgqkDGLrwjQqxhrsv9x3-6pGYXmJCr38e43dlBglrGqmh89fvd7opTX5VHT3bq9lc&usqp=CAU"/>
          <h4>David Lee</h4>
          <p>Marketing Director</p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
