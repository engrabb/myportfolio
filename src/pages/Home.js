import React from 'react';
import './Home.css';
import pfbild from '../profilbild.jpg';
const Home = () => {
  return (
    <div className="home-container">
      <div className="profile-section">
        <img src={pfbild} alt="Profile" className="profile-picture" />
        <h1>Erik Werner</h1>
        <h2>Software developer</h2>
      </div>
      <div className="about-section">
        <h3>About Me</h3>
        <p>Junior software developer in the making. Mostly working with .NET and React, playing with both backend and frontend.</p>
        <p>Have a look at a few of my school projects!</p>
      </div>
    </div>
  );
};

export default Home;